import { File, Image, Link2, Trash2, Upload } from 'lucide-react';
import type { Evidence } from '../types';

interface Props {
  evidence: Evidence | null;
  index: number;
  onChange: (evidence: Evidence | null) => void;
}

const makeId = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`;

const toDataUrl = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(String(reader.result));
  reader.onerror = () => reject(reader.error);
  reader.readAsDataURL(file);
});

export default function EvidenceSlot({ evidence, index, onChange }: Props) {
  const uploadFile = async (file?: File) => {
    if (!file) return;
    const dataUrl = await toDataUrl(file);
    onChange({
      id: makeId(),
      kind: file.type.startsWith('image/') ? 'image' : 'file',
      name: file.name,
      mimeType: file.type,
      size: file.size,
      dataUrl,
    });
  };

  const addLink = () => {
    const url = window.prompt('Pega el enlace de la evidencia:');
    if (!url?.trim()) return;
    const normalized = /^https?:\/\//i.test(url.trim()) ? url.trim() : `https://${url.trim()}`;
    onChange({ id: makeId(), kind: 'link', name: normalized, url: normalized });
  };

  if (evidence) {
    return (
      <div className="evidence-slot filled">
        {evidence.kind === 'image' && evidence.dataUrl ? (
          <img src={evidence.dataUrl} alt={evidence.name} />
        ) : (
          <div className="file-preview">{evidence.kind === 'link' ? <Link2 size={24} /> : <File size={24} />}<span>{evidence.name}</span></div>
        )}
        <div className="evidence-footer">
          <span>{evidence.kind === 'image' ? <Image size={14} /> : evidence.kind === 'link' ? <Link2 size={14} /> : <File size={14} />} Evidencia {index + 1}</span>
          <button type="button" className="icon-button danger" title="Eliminar evidencia" onClick={() => onChange(null)}><Trash2 size={15} /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="evidence-slot empty">
      <div className="slot-title">Evidencia {index + 1}</div>
      <div className="slot-actions">
        <label className="mini-button"><Upload size={15} /> Archivo / foto<input type="file" hidden onChange={(e) => uploadFile(e.target.files?.[0])} /></label>
        <button type="button" className="mini-button" onClick={addLink}><Link2 size={15} /> Enlace</button>
      </div>
    </div>
  );
}
