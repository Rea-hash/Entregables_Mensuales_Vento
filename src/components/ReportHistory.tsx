import { useState } from 'react';
import { FileDown, FolderOpen, Trash2 } from 'lucide-react';
import type { SavedReport } from '../types';
import { ROLE_LABELS } from '../data';
import { BRANDS, type BrandId } from '../brands';

interface Props {
  reports: SavedReport[];
  currentBrand: BrandId;
  onLoad: (report: SavedReport) => void;
  onDelete: (id: string) => void;
  onPdf: (report: SavedReport) => void;
}

type HistoryFilter = 'all' | BrandId;

export default function ReportHistory({ reports, currentBrand, onLoad, onDelete, onPdf }: Props) {
  const [filter, setFilter] = useState<HistoryFilter>('all');
  const filtered = filter === 'all' ? reports : reports.filter((report) => (report.metadata.brand || 'vento') === filter);

  return (
    <section className="history-card">
      <div className="section-heading history-heading">
        <div><span className="eyebrow">ARCHIVO LOCAL</span><h2>Reportes guardados</h2></div>
        <span className="history-count">{filtered.length}</span>
      </div>
      <div className="history-filters" aria-label="Filtrar historial por marca">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Todos</button>
        {(Object.keys(BRANDS) as BrandId[]).map((id) => <button key={id} className={filter === id ? 'active' : ''} onClick={() => setFilter(id)}>{BRANDS[id].shortName}</button>)}
      </div>
      {!filtered.length ? <div className="history-empty">No hay reportes guardados para este filtro en este navegador.</div> : (
        <div className="history-list">
          {filtered.map((report) => {
            const place = report.metadata.role === 'manager' ? report.metadata.agency : report.metadata.region;
            const reportBrand = report.metadata.brand || 'vento';
            return <div className="history-row" key={report.id}>
              <div className="history-copy"><span className={`brand-chip chip-${reportBrand}`}>{BRANDS[reportBrand].shortName}</span><strong>{place}</strong><span>{ROLE_LABELS[report.metadata.role]} · {report.metadata.reportDate} · {report.metadata.reporterName || 'Sin nombre'}</span></div>
              <div className="history-actions">
                <button title="Abrir" onClick={() => onLoad(report)}><FolderOpen size={16} /></button>
                <button title="PDF" onClick={() => onPdf(report)}><FileDown size={16} /></button>
                <button title="Eliminar" className="danger" onClick={() => onDelete(report.id)}><Trash2 size={16} /></button>
              </div>
            </div>;
          })}
        </div>
      )}
      {filter === 'all' && reports.length > 0 && <div className="history-note">Marca activa: {BRANDS[currentBrand].shortName}. El historial puede contener reportes de ambas marcas.</div>}
    </section>
  );
}
