import jsPDF from 'jspdf';
import { CHECKLISTS, ROLE_DESTINATIONS, ROLE_LABELS } from './data';
import type { Evidence, SavedReport } from './types';

const BLUE: [number, number, number] = [0, 91, 188];
const NAVY: [number, number, number] = [7, 39, 99];
const LIGHT: [number, number, number] = [239, 247, 255];
const TEXT: [number, number, number] = [25, 44, 72];
const MUTED: [number, number, number] = [91, 110, 138];

function safeText(value?: string) {
  return value?.trim() || '—';
}

function imageFormat(evidence: Evidence): 'PNG' | 'JPEG' | 'WEBP' {
  const mime = evidence.mimeType || '';
  if (mime.includes('png')) return 'PNG';
  if (mime.includes('webp')) return 'WEBP';
  return 'JPEG';
}

/**
 * Scales an image so it fits completely inside a frame without stretching
 * or cropping. This is the PDF equivalent of CSS `object-fit: contain`.
 */
function containImage(
  sourceW: number,
  sourceH: number,
  frameW: number,
  frameH: number,
): { width: number; height: number } {
  if (!sourceW || !sourceH) return { width: frameW, height: frameH };
  const scale = Math.min(frameW / sourceW, frameH / sourceH);
  return {
    width: sourceW * scale,
    height: sourceH * scale,
  };
}

export async function generateMonthlyPdf(report: SavedReport): Promise<jsPDF> {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 12;
  const contentW = pageW - margin * 2;
  const items = CHECKLISTS[report.metadata.role];

  const counts = { complies: 0, not_complies: 0, na: 0, pending: 0 };
  items.forEach((item) => counts[report.itemStates[item.id]?.status || 'pending']++);
  const reviewed = counts.complies + counts.not_complies + counts.na;
  const progress = items.length ? Math.round((reviewed / items.length) * 100) : 0;

  let page = 1;
  let y = 0;

  const footer = () => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...MUTED);
    doc.text(`Vento · Checklist mensual de evidencias · Página ${page}`, pageW / 2, pageH - 6, { align: 'center' });
  };

  const smallHeader = () => {
    doc.setFillColor(...NAVY);
    doc.rect(0, 0, pageW, 14, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(`CHECKLIST MENSUAL · ${ROLE_LABELS[report.metadata.role].toUpperCase()}`, margin, 9);
    y = 19;
  };

  const nextPage = () => {
    footer();
    doc.addPage();
    page++;
    smallHeader();
  };

  // Cover/banner
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, pageW, 48, 'F');
  doc.setFillColor(...BLUE);
  doc.rect(0, 36, pageW, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('CHECKLIST MENSUAL DE EVIDENCIAS', margin, 18);
  doc.setFontSize(11);
  doc.text(`${ROLE_LABELS[report.metadata.role]}  →  ${ROLE_DESTINATIONS[report.metadata.role]}`, margin, 27);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('Control de entregables · Operación Vento', margin, 33);

  y = 55;
  doc.setFillColor(...LIGHT);
  doc.setDrawColor(199, 224, 247);
  doc.roundedRect(margin, y, contentW, 39, 2, 2, 'FD');
  doc.setTextColor(...NAVY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('DATOS DEL REPORTE', margin + 5, y + 7);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...TEXT);

  const placeLabel = report.metadata.role === 'manager' ? 'Agencia' : 'Región';
  const placeValue = report.metadata.role === 'manager' ? report.metadata.agency : report.metadata.region;
  const rows: Array<[string, string, string, string]> = report.metadata.role === 'manager'
    ? [
        [placeLabel, safeText(placeValue), 'Responsable', safeText(report.metadata.reporterName)],
        ['Fecha', safeText(report.metadata.reportDate), 'Región', safeText(report.metadata.region)],
        ['Regional Sr.', safeText(report.metadata.regionalManager), 'Distrito', safeText(report.metadata.district)],
        ['Distrital', safeText(report.metadata.districtManager), 'Avance', `${progress}% (${reviewed}/${items.length})`],
      ]
    : report.metadata.role === 'junior'
      ? [
          [placeLabel, safeText(placeValue), 'Responsable', safeText(report.metadata.reporterName)],
          ['Fecha', safeText(report.metadata.reportDate), 'Regional Sr.', safeText(report.metadata.regionalManager)],
          ['Distrito', safeText(report.metadata.district), 'Distrital', safeText(report.metadata.districtManager)],
          ['Avance', `${progress}% (${reviewed}/${items.length})`, 'Evidencias', String(items.reduce((sum, item) => sum + (report.itemStates[item.id]?.evidences.filter(Boolean).length || 0), 0))],
        ]
      : [
          [placeLabel, safeText(placeValue), 'Responsable', safeText(report.metadata.reporterName)],
          ['Fecha', safeText(report.metadata.reportDate), 'Distrito', safeText(report.metadata.district)],
          ['Gerente Distrital', safeText(report.metadata.districtManager), 'Avance', `${progress}% (${reviewed}/${items.length})`],
          ['Entregables', String(items.length), 'No cumple', String(counts.not_complies)],
        ];
  rows.forEach((r, i) => {
    const ry = y + 13 + i * 6;
    doc.setFont('helvetica', 'bold'); doc.setTextColor(...MUTED); doc.text(`${r[0]}:`, margin + 5, ry);
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...TEXT); doc.text(doc.splitTextToSize(r[1], 58)[0], margin + 23, ry);
    doc.setFont('helvetica', 'bold'); doc.setTextColor(...MUTED); doc.text(`${r[2]}:`, margin + 98, ry);
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...TEXT); doc.text(doc.splitTextToSize(r[3], 56)[0], margin + 119, ry);
  });

  y = 101;
  const metricW = (contentW - 6) / 4;
  [
    ['Cumple', counts.complies],
    ['No cumple', counts.not_complies],
    ['No aplica', counts.na],
    ['Pendiente', counts.pending],
  ].forEach(([label, value], i) => {
    const x = margin + i * (metricW + 2);
    doc.setFillColor(250, 252, 255); doc.setDrawColor(221, 231, 242); doc.roundedRect(x, y, metricW, 17, 2, 2, 'FD');
    doc.setFont('helvetica', 'bold'); doc.setFontSize(13); doc.setTextColor(...NAVY); doc.text(String(value), x + metricW / 2, y + 8, { align: 'center' });
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...MUTED); doc.text(String(label), x + metricW / 2, y + 13, { align: 'center' });
  });
  y = 124;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const state = report.itemStates[item.id] || { status: 'pending', comment: '', evidences: [null, null, null] };
    const images = state.evidences.filter((e): e is Evidence => Boolean(e && e.kind === 'image' && e.dataUrl));
    const attachments = state.evidences.filter((e): e is Evidence => Boolean(e && e.kind !== 'image'));
    const titleLines = doc.splitTextToSize(`${i + 1}. ${item.title}`, contentW - 44);
    const commentLines = state.comment ? doc.splitTextToSize(`Nota: ${state.comment}`, contentW - 10) : [];
    // Give image evidence enough room to preserve its original composition.
    // The image itself is fitted with `contain` below, never stretched/cropped.
    const imgH = images.length ? 44 : 0;
    const attachH = attachments.length ? attachments.length * 5 + 2 : 0;
    const rowH = Math.max(24, 12 + titleLines.length * 4 + (commentLines.length ? commentLines.length * 3.7 + 3 : 0) + imgH + attachH);

    if (y + rowH > pageH - 14) nextPage();

    doc.setFillColor(255, 255, 255); doc.setDrawColor(222, 232, 243); doc.roundedRect(margin, y, contentW, rowH - 2, 2, 2, 'FD');
    doc.setFont('helvetica', 'bold'); doc.setFontSize(8.8); doc.setTextColor(...TEXT); doc.text(titleLines, margin + 5, y + 7);

    const statusLabel = state.status === 'complies' ? 'CUMPLE' : state.status === 'not_complies' ? 'NO CUMPLE' : state.status === 'na' ? 'NO APLICA' : 'PENDIENTE';
    doc.setFillColor(...LIGHT); doc.roundedRect(pageW - margin - 34, y + 4, 29, 7, 1.5, 1.5, 'F');
    doc.setTextColor(...NAVY); doc.setFontSize(6.8); doc.text(statusLabel, pageW - margin - 19.5, y + 8.6, { align: 'center' });

    let detailY = y + 9 + titleLines.length * 4;
    if (item.periodicity || item.delivery) {
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...MUTED);
      doc.text(`${item.periodicity ? `Periodicidad: ${item.periodicity}` : ''}${item.periodicity && item.delivery ? '  ·  ' : ''}${item.delivery ? `Entrega: ${item.delivery}` : ''}`, margin + 5, detailY);
      detailY += 5;
    }

    if (commentLines.length) {
      doc.setTextColor(...TEXT); doc.setFontSize(7.2); doc.text(commentLines, margin + 5, detailY);
      detailY += commentLines.length * 3.7 + 3;
    }

    if (images.length) {
      const visibleImages = images.slice(0, 3);
      const gap = 3;
      const availableW = contentW - 10;
      const frameH = 40;

      // Use the available horizontal space according to the number of photos:
      // 1 photo = larger preview, 2 = half-width, 3 = thirds.
      const frameW = visibleImages.length === 1
        ? Math.min(96, availableW)
        : (availableW - gap * (visibleImages.length - 1)) / visibleImages.length;
      const totalFramesW = frameW * visibleImages.length + gap * (visibleImages.length - 1);
      const startX = margin + 5 + Math.max(0, (availableW - totalFramesW) / 2);

      visibleImages.forEach((ev, idx) => {
        const frameX = startX + idx * (frameW + gap);

        // Neutral frame so portrait/landscape images can keep their aspect ratio.
        doc.setFillColor(250, 252, 255);
        doc.setDrawColor(213, 224, 237);
        doc.roundedRect(frameX, detailY, frameW, frameH, 1.2, 1.2, 'FD');

        try {
          const props = doc.getImageProperties(ev.dataUrl!);
          const fitted = containImage(props.width, props.height, frameW - 2, frameH - 2);
          const imageX = frameX + (frameW - fitted.width) / 2;
          const imageY = detailY + (frameH - fitted.height) / 2;

          doc.addImage(
            ev.dataUrl!,
            imageFormat(ev),
            imageX,
            imageY,
            fitted.width,
            fitted.height,
            undefined,
            'FAST',
          );
        } catch {
          doc.setTextColor(...MUTED);
          doc.setFontSize(6.5);
          doc.text('Imagen no disponible', frameX + frameW / 2, detailY + frameH / 2 + 1, { align: 'center' });
        }
      });
      detailY += frameH + 4;
    }

    if (attachments.length) {
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...NAVY);
      attachments.forEach((ev, idx) => {
        const label = ev.kind === 'link' ? `Enlace ${idx + 1}: ${ev.name}` : `Archivo ${idx + 1}: ${ev.name}`;
        const text = doc.splitTextToSize(label, contentW - 10)[0];
        if (ev.kind === 'link' && ev.url) doc.textWithLink(text, margin + 5, detailY, { url: ev.url });
        else doc.text(text, margin + 5, detailY);
        detailY += 5;
      });
    }

    y += rowH;
  }

  footer();
  return doc;
}
