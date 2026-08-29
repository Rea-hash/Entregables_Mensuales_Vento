import jsPDF from 'jspdf';
import { CHECKLISTS, ROLE_DESTINATIONS, ROLE_LABELS } from './data';
import { BRANDS, type BrandId } from './brands';
import type { Evidence, SavedReport } from './types';

// Creación y desarrollo original: Josue Sebastian Rea Garcia.
// Atribución interna de código; no se imprime ni se muestra en el frontend.

type RGB = [number, number, number];

interface PdfTheme {
  primary: RGB;
  accent: RGB;
  light: RGB;
  text: RGB;
  muted: RGB;
  border: RGB;
}

const THEMES: Record<BrandId, PdfTheme> = {
  vento: {
    primary: [7, 39, 99],
    accent: [0, 91, 188],
    light: [239, 247, 255],
    text: [25, 44, 72],
    muted: [91, 110, 138],
    border: [199, 224, 247],
  },
  'american-piston': {
    primary: [18, 18, 20],
    accent: [202, 25, 32],
    light: [249, 244, 244],
    text: [35, 35, 38],
    muted: [105, 105, 112],
    border: [224, 201, 203],
  },
};

function safeText(value?: string) {
  return value?.trim() || '—';
}

function imageFormat(evidence: Evidence): 'PNG' | 'JPEG' | 'WEBP' {
  const mime = evidence.mimeType || '';
  if (mime.includes('png')) return 'PNG';
  if (mime.includes('webp')) return 'WEBP';
  return 'JPEG';
}

function containImage(sourceW: number, sourceH: number, frameW: number, frameH: number): { width: number; height: number } {
  if (!sourceW || !sourceH) return { width: frameW, height: frameH };
  const scale = Math.min(frameW / sourceW, frameH / sourceH);
  return { width: sourceW * scale, height: sourceH * scale };
}

async function loadPublicImage(fileName: string): Promise<string | null> {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}${fileName}`);
    if (!response.ok) return null;
    const blob = await response.blob();
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export async function generateMonthlyPdf(report: SavedReport): Promise<jsPDF> {
  const brandId: BrandId = report.metadata.brand || 'vento';
  const brand = BRANDS[brandId];
  const theme = THEMES[brandId];
  const logoData = await loadPublicImage(brand.logo);
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
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.2);
    doc.setTextColor(...theme.primary);
    doc.text(brand.legalHeadline, pageW / 2, pageH - 9, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.7);
    doc.setTextColor(...theme.muted);
    doc.text(`Prohibida su reproducción, distribución o divulgación no autorizada · Página ${page}`, pageW / 2, pageH - 5.2, { align: 'center' });
  };

  const smallHeader = () => {
    doc.setFillColor(...theme.primary);
    doc.rect(0, 0, pageW, 14, 'F');
    doc.setFillColor(...theme.accent);
    doc.rect(0, 12, pageW, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(`${brand.shortName.toUpperCase()} · CHECKLIST MENSUAL · ${ROLE_LABELS[report.metadata.role].toUpperCase()}`, margin, 9);
    y = 19;
  };

  const nextPage = () => {
    footer();
    doc.addPage();
    page++;
    smallHeader();
  };

  // Carátula multimarca
  doc.setFillColor(...theme.primary);
  doc.rect(0, 0, pageW, 48, 'F');
  doc.setFillColor(...theme.accent);
  doc.rect(0, 36, pageW, 12, 'F');

  if (logoData) {
    try {
      const props = doc.getImageProperties(logoData);
      const fitted = containImage(props.width, props.height, 43, 27);
      const logoX = pageW - margin - 43 + (43 - fitted.width) / 2;
      const logoY = 4.5 + (27 - fitted.height) / 2;
      if (brandId === 'vento') {
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(pageW - margin - 46, 4, 46, 28, 2, 2, 'F');
      }
      doc.addImage(logoData, 'JPEG', logoX, logoY, fitted.width, fitted.height, undefined, 'FAST');
    } catch {
      // La identidad textual permanece si el navegador no puede cargar la imagen.
    }
  }

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(17);
  doc.text('ENTREGABLES MENSUALES GRUPO VNA', margin, 16);
  doc.setFontSize(10.5);
  doc.text(`${ROLE_LABELS[report.metadata.role]}  →  ${ROLE_DESTINATIONS[report.metadata.role]}`, margin, 25);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.3);
  doc.text(`Checklist mensual de evidencias · ${brand.operationLabel}`, margin, 32);

  y = 55;
  doc.setFillColor(...theme.light);
  doc.setDrawColor(...theme.border);
  doc.roundedRect(margin, y, contentW, 12, 2, 2, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.2);
  doc.setTextColor(...theme.primary);
  doc.text(brand.legalHeadline, margin + 5, y + 5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.2);
  doc.setTextColor(...theme.muted);
  doc.text(brand.legalBody, margin + 5, y + 9);

  y = 71;
  doc.setFillColor(...theme.light);
  doc.setDrawColor(...theme.border);
  doc.roundedRect(margin, y, contentW, 39, 2, 2, 'FD');
  doc.setTextColor(...theme.primary);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(`DATOS DEL REPORTE · ${brand.shortName.toUpperCase()}`, margin + 5, y + 7);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...theme.text);

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
    doc.setFont('helvetica', 'bold'); doc.setTextColor(...theme.muted); doc.text(`${r[0]}:`, margin + 5, ry);
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...theme.text); doc.text(doc.splitTextToSize(r[1], 58)[0], margin + 23, ry);
    doc.setFont('helvetica', 'bold'); doc.setTextColor(...theme.muted); doc.text(`${r[2]}:`, margin + 98, ry);
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...theme.text); doc.text(doc.splitTextToSize(r[3], 56)[0], margin + 119, ry);
  });

  y = 117;
  const metricW = (contentW - 6) / 4;
  [
    ['Cumple', counts.complies],
    ['No cumple', counts.not_complies],
    ['No aplica', counts.na],
    ['Pendiente', counts.pending],
  ].forEach(([label, value], i) => {
    const x = margin + i * (metricW + 2);
    doc.setFillColor(250, 250, 251); doc.setDrawColor(...theme.border); doc.roundedRect(x, y, metricW, 17, 2, 2, 'FD');
    doc.setFont('helvetica', 'bold'); doc.setFontSize(13); doc.setTextColor(...theme.accent); doc.text(String(value), x + metricW / 2, y + 8, { align: 'center' });
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...theme.muted); doc.text(String(label), x + metricW / 2, y + 13, { align: 'center' });
  });
  y = 140;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const state = report.itemStates[item.id] || { status: 'pending', comment: '', evidences: [null, null, null] };
    const images = state.evidences.filter((e): e is Evidence => Boolean(e && e.kind === 'image' && e.dataUrl));
    const attachments = state.evidences.filter((e): e is Evidence => Boolean(e && e.kind !== 'image'));
    const titleLines = doc.splitTextToSize(`${i + 1}. ${item.title}`, contentW - 44);
    const commentLines = state.comment ? doc.splitTextToSize(`Nota: ${state.comment}`, contentW - 10) : [];
    const imgH = images.length ? 44 : 0;
    const attachH = attachments.length ? attachments.length * 5 + 2 : 0;
    const rowH = Math.max(24, 12 + titleLines.length * 4 + (commentLines.length ? commentLines.length * 3.7 + 3 : 0) + imgH + attachH);

    if (y + rowH > pageH - 19) nextPage();

    doc.setFillColor(255, 255, 255); doc.setDrawColor(...theme.border); doc.roundedRect(margin, y, contentW, rowH - 2, 2, 2, 'FD');
    doc.setFont('helvetica', 'bold'); doc.setFontSize(8.8); doc.setTextColor(...theme.text); doc.text(titleLines, margin + 5, y + 7);

    const statusLabel = state.status === 'complies' ? 'CUMPLE' : state.status === 'not_complies' ? 'NO CUMPLE' : state.status === 'na' ? 'NO APLICA' : 'PENDIENTE';
    doc.setFillColor(...theme.light); doc.roundedRect(pageW - margin - 34, y + 4, 29, 7, 1.5, 1.5, 'F');
    doc.setTextColor(...theme.primary); doc.setFontSize(6.8); doc.text(statusLabel, pageW - margin - 19.5, y + 8.6, { align: 'center' });

    let detailY = y + 9 + titleLines.length * 4;
    if (item.periodicity || item.delivery) {
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...theme.muted);
      doc.text(`${item.periodicity ? `Periodicidad: ${item.periodicity}` : ''}${item.periodicity && item.delivery ? '  ·  ' : ''}${item.delivery ? `Entrega: ${item.delivery}` : ''}`, margin + 5, detailY);
      detailY += 5;
    }

    if (commentLines.length) {
      doc.setTextColor(...theme.text); doc.setFontSize(7.2); doc.text(commentLines, margin + 5, detailY);
      detailY += commentLines.length * 3.7 + 3;
    }

    if (images.length) {
      const visibleImages = images.slice(0, 3);
      const gap = 3;
      const availableW = contentW - 10;
      const frameH = 40;
      const frameW = visibleImages.length === 1 ? Math.min(96, availableW) : (availableW - gap * (visibleImages.length - 1)) / visibleImages.length;
      const totalFramesW = frameW * visibleImages.length + gap * (visibleImages.length - 1);
      const startX = margin + 5 + Math.max(0, (availableW - totalFramesW) / 2);

      visibleImages.forEach((ev, idx) => {
        const frameX = startX + idx * (frameW + gap);
        doc.setFillColor(250, 250, 251);
        doc.setDrawColor(...theme.border);
        doc.roundedRect(frameX, detailY, frameW, frameH, 1.2, 1.2, 'FD');
        try {
          const props = doc.getImageProperties(ev.dataUrl!);
          const fitted = containImage(props.width, props.height, frameW - 2, frameH - 2);
          const imageX = frameX + (frameW - fitted.width) / 2;
          const imageY = detailY + (frameH - fitted.height) / 2;
          doc.addImage(ev.dataUrl!, imageFormat(ev), imageX, imageY, fitted.width, fitted.height, undefined, 'FAST');
        } catch {
          doc.setTextColor(...theme.muted);
          doc.setFontSize(6.5);
          doc.text('Imagen no disponible', frameX + frameW / 2, detailY + frameH / 2 + 1, { align: 'center' });
        }
      });
      detailY += frameH + 4;
    }

    if (attachments.length) {
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...theme.accent);
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
