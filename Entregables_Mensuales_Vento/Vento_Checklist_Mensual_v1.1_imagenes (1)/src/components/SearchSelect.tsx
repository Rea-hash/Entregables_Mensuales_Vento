import { useMemo, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface Props {
  label: string;
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
}

export default function SearchSelect({ label, value, options, placeholder, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('es');
    if (!q) return options.slice(0, 80);
    return options.filter((o) => o.toLocaleLowerCase('es').includes(q)).slice(0, 80);
  }, [options, query]);

  return (
    <label className="field searchable-field">
      <span>{label}</span>
      <button type="button" className="select-button" onClick={() => setOpen((v) => !v)}>
        <span className={value ? '' : 'placeholder'}>{value || placeholder}</span>
        <ChevronDown size={17} />
      </button>
      {open && (
        <div className="select-popover">
          <div className="search-box"><Search size={16} /><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar..." /></div>
          <div className="options-list">
            {filtered.map((option) => (
              <button key={option} type="button" className={option === value ? 'option active' : 'option'} onClick={() => { onChange(option); setOpen(false); setQuery(''); }}>{option}</button>
            ))}
            {!filtered.length && <div className="empty-option">Sin coincidencias</div>}
          </div>
        </div>
      )}
    </label>
  );
}
