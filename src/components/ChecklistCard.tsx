import { Star } from 'lucide-react';
import type { ChecklistItem } from '../data';
import type { ComplianceStatus, Evidence, ItemState } from '../types';
import { parseExpectedCount, suggestStatus } from '../scoring';
import EvidenceSlot from './EvidenceSlot';

interface Props {
  item: ChecklistItem;
  index: number;
  state: ItemState;
  contribution: number | null;
  onChange: (state: ItemState) => void;
}

const statuses: Array<{ value: ComplianceStatus; label: string }> = [
  { value: 'complies', label: 'Cumple' },
  { value: 'not_complies', label: 'No cumple' },
  { value: 'na', label: 'No aplica' },
];

const statusLabels: Record<ComplianceStatus, string> = {
  pending: 'Pendiente',
  complies: 'Cumple',
  not_complies: 'No cumple',
  na: 'No aplica',
};

export default function ChecklistCard({ item, index, state, contribution, onChange }: Props) {
  const setEvidence = (slot: number, evidence: Evidence | null) => {
    const evidences = [...state.evidences];
    evidences[slot] = evidence;
    onChange({ ...state, evidences });
  };

  const expected = item.informational ? 0 : parseExpectedCount(item.periodicity);
  const suggestion = expected > 0 ? suggestStatus(item, state.actualCount) : null;
  const suggestionDiffers = Boolean(suggestion && suggestion.status !== state.status);

  const setActualCount = (raw: string) => {
    const actualCount = raw === '' ? undefined : Math.max(0, Number(raw));
    const next: ItemState = { ...state, actualCount };
    // Cada vez que se captura el conteo, el status se actualiza automáticamente según el estándar.
    if (actualCount !== undefined) {
      const applied = suggestStatus(item, actualCount);
      if (applied) next.status = applied.status;
    }
    onChange(next);
  };

  return (
    <article className="check-card">
      <div className="check-card-head">
        <div className="item-number">{String(index + 1).padStart(2, '0')}</div>
        <div className="item-copy">
          <h3>{item.title} {item.critical && <span className="critical-tag" title="Entregable preponderante: pondera doble en la calificación"><Star size={11} /> Prioritario</span>}</h3>
          <div className="meta-row">
            {item.periodicity && <span>Periodicidad: <strong>{item.periodicity}</strong></span>}
            {item.delivery && <span>Entrega: <strong>{item.delivery}</strong></span>}
            {expected > 0 && <span>Estándar: <strong>{expected}/mes</strong></span>}
          </div>
        </div>
        {!item.informational && (
          <div className="status-control">
            {statuses.map((s) => <button key={s.value} type="button" className={`status-pill ${s.value} ${state.status === s.value ? 'active' : ''}`} onClick={() => onChange({ ...state, status: state.status === s.value ? 'pending' : s.value })}>{s.label}</button>)}
          </div>
        )}
        {item.informational && <span className="informational-tag">Informativo · sin ponderación</span>}
      </div>

      {expected > 0 && (
        <div className="standard-row">
          <label><span>Veces realizado este mes</span><input type="number" min={0} value={state.actualCount ?? ''} onChange={(e) => setActualCount(e.target.value)} placeholder="0" /></label>
          {contribution !== null && (
            <span className={`contribution-chip ${contribution > 0 ? 'positive' : 'zero'}`} title="Puntos que este entregable aporta a la calificación total del header">
              Aporte a la calificación: {contribution > 0 ? '+' : ''}{contribution}%
            </span>
          )}
          {suggestionDiffers && (
            <button type="button" className="suggestion-hint" onClick={() => onChange({ ...state, status: suggestion!.status })}>
              Sugerido: {statusLabels[suggestion!.status]} ({suggestion!.reason}) · aplicar
            </button>
          )}
        </div>
      )}

      <div className="evidence-grid">
        {[0, 1, 2].map((slot) => <EvidenceSlot key={slot} index={slot} evidence={state.evidences[slot] || null} onChange={(ev) => setEvidence(slot, ev)} />)}
      </div>
      <label className="comment-field"><span>Comentarios / observaciones</span><textarea value={state.comment} onChange={(e) => onChange({ ...state, comment: e.target.value })} placeholder="Añade contexto, desviaciones o notas del entregable..." /></label>
    </article>
  );
}
