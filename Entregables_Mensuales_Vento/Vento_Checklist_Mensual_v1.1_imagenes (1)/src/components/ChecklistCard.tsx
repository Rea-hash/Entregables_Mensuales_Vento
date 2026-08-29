import type { ChecklistItem } from '../data';
import type { ComplianceStatus, Evidence, ItemState } from '../types';
import EvidenceSlot from './EvidenceSlot';

interface Props {
  item: ChecklistItem;
  index: number;
  state: ItemState;
  onChange: (state: ItemState) => void;
}

const statuses: Array<{ value: ComplianceStatus; label: string }> = [
  { value: 'complies', label: 'Cumple' },
  { value: 'not_complies', label: 'No cumple' },
  { value: 'na', label: 'No aplica' },
];

export default function ChecklistCard({ item, index, state, onChange }: Props) {
  const setEvidence = (slot: number, evidence: Evidence | null) => {
    const evidences = [...state.evidences];
    evidences[slot] = evidence;
    onChange({ ...state, evidences });
  };

  return (
    <article className="check-card">
      <div className="check-card-head">
        <div className="item-number">{String(index + 1).padStart(2, '0')}</div>
        <div className="item-copy">
          <h3>{item.title}</h3>
          <div className="meta-row">
            {item.periodicity && <span>Periodicidad: <strong>{item.periodicity}</strong></span>}
            {item.delivery && <span>Entrega: <strong>{item.delivery}</strong></span>}
          </div>
        </div>
        <div className="status-control">
          {statuses.map((s) => <button key={s.value} type="button" className={`status-pill ${s.value} ${state.status === s.value ? 'active' : ''}`} onClick={() => onChange({ ...state, status: state.status === s.value ? 'pending' : s.value })}>{s.label}</button>)}
        </div>
      </div>
      <div className="evidence-grid">
        {[0, 1, 2].map((slot) => <EvidenceSlot key={slot} index={slot} evidence={state.evidences[slot] || null} onChange={(ev) => setEvidence(slot, ev)} />)}
      </div>
      <label className="comment-field"><span>Comentarios / observaciones</span><textarea value={state.comment} onChange={(e) => onChange({ ...state, comment: e.target.value })} placeholder="Añade contexto, desviaciones o notas del entregable..." /></label>
    </article>
  );
}
