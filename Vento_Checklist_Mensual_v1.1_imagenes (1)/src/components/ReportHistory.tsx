import { FileDown, FolderOpen, Trash2 } from 'lucide-react';
import type { SavedReport } from '../types';
import { ROLE_LABELS } from '../data';

interface Props {
  reports: SavedReport[];
  onLoad: (report: SavedReport) => void;
  onDelete: (id: string) => void;
  onPdf: (report: SavedReport) => void;
}

export default function ReportHistory({ reports, onLoad, onDelete, onPdf }: Props) {
  return (
    <section className="history-card">
      <div className="section-heading"><div><span className="eyebrow">ARCHIVO LOCAL</span><h2>Reportes guardados</h2></div><span className="history-count">{reports.length}</span></div>
      {!reports.length ? <div className="history-empty">Todavía no hay reportes guardados en este navegador.</div> : (
        <div className="history-list">
          {reports.map((report) => {
            const place = report.metadata.role === 'manager' ? report.metadata.agency : report.metadata.region;
            return <div className="history-row" key={report.id}>
              <div><strong>{place}</strong><span>{ROLE_LABELS[report.metadata.role]} · {report.metadata.reportDate} · {report.metadata.reporterName || 'Sin nombre'}</span></div>
              <div className="history-actions">
                <button title="Abrir" onClick={() => onLoad(report)}><FolderOpen size={16} /></button>
                <button title="PDF" onClick={() => onPdf(report)}><FileDown size={16} /></button>
                <button title="Eliminar" className="danger" onClick={() => onDelete(report.id)}><Trash2 size={16} /></button>
              </div>
            </div>;
          })}
        </div>
      )}
    </section>
  );
}
