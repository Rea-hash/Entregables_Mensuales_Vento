import { useEffect, useMemo, useState } from 'react';
import { Download, FileCheck2, RotateCcw, Save, ShieldCheck } from 'lucide-react';
import { CATALOG, CHECKLISTS, REGIONS, ROLE_DESTINATIONS, ROLE_LABELS, type ChecklistRole } from './data';
import type { ItemState, ReportMetadata, SavedReport } from './types';
import ChecklistCard from './components/ChecklistCard';
import SearchSelect from './components/SearchSelect';
import ReportHistory from './components/ReportHistory';
import { deleteReport, getReports, saveReport } from './storage';
import { generateMonthlyPdf } from './pdfGenerator';

const mexicoDate = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

const emptyMetadata = (role: ChecklistRole): ReportMetadata => ({
  role,
  reporterName: '',
  reportDate: mexicoDate(),
  agency: '',
  region: '',
  regionalManager: '',
  district: '',
  districtManager: '',
});

const emptyStates = (role: ChecklistRole): Record<string, ItemState> => Object.fromEntries(
  CHECKLISTS[role].map((item) => [item.id, { status: 'pending', comment: '', evidences: [null, null, null] }]),
);

const createReportId = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`;

export default function App() {
  const [role, setRole] = useState<ChecklistRole>('manager');
  const [metadata, setMetadata] = useState<ReportMetadata>(() => emptyMetadata('manager'));
  const [states, setStates] = useState<Record<string, ItemState>>(() => emptyStates('manager'));
  const [reportId, setReportId] = useState<string>(() => createReportId());
  const [reports, setReports] = useState<SavedReport[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => { getReports().then(setReports).catch(console.error); }, []);

  const items = CHECKLISTS[role];
  const reviewed = items.filter((i) => (states[i.id]?.status || 'pending') !== 'pending').length;
  const progress = items.length ? Math.round((reviewed / items.length) * 100) : 0;
  const evidenceCount = items.reduce((sum, i) => sum + (states[i.id]?.evidences.filter(Boolean).length || 0), 0);

  const agencyOptions = useMemo(() => CATALOG.map((r) => r.agency).filter(Boolean), []);
  const regionOptions = useMemo(() => REGIONS.map((r) => r.region), []);

  const switchRole = (next: ChecklistRole) => {
    if (next === role) return;
    setRole(next);
    setMetadata(emptyMetadata(next));
    setStates(emptyStates(next));
    setReportId(createReportId());
    setMessage('');
  };

  const selectAgency = (agency: string) => {
    const row = CATALOG.find((r) => r.agency === agency);
    if (!row) return;
    setMetadata((m) => ({ ...m, agency, region: row.region, regionalManager: row.regionalManager, district: row.district, districtManager: row.districtManager }));
  };

  const selectRegion = (region: string) => {
    const row = CATALOG.find((r) => r.region === region);
    if (!row) return;
    setMetadata((m) => ({ ...m, region, regionalManager: row.regionalManager, district: row.district, districtManager: row.districtManager }));
  };

  const buildReport = (): SavedReport => {
    const now = new Date().toISOString();
    return { id: reportId, createdAt: now, updatedAt: now, metadata: { ...metadata, role }, itemStates: states };
  };

  const validate = () => {
    if (!metadata.reporterName.trim()) return 'Captura el nombre del responsable del reporte.';
    if (!metadata.reportDate) return 'Selecciona la fecha del reporte.';
    if (role === 'manager' && !metadata.agency) return 'Selecciona una agencia.';
    if (role !== 'manager' && !metadata.region) return 'Selecciona una región.';
    return '';
  };

  const handleSave = async () => {
    const error = validate();
    if (error) { setMessage(error); return; }
    const existing = reports.find((r) => r.id === reportId);
    const report = buildReport();
    if (existing) report.createdAt = existing.createdAt;
    await saveReport(report);
    setReports(await getReports());
    setMessage('Reporte guardado localmente en este navegador.');
  };

  const handlePdf = async (source?: SavedReport) => {
    const report = source || buildReport();
    if (!source) {
      const error = validate();
      if (error) { setMessage(error); return; }
    }
    const doc = await generateMonthlyPdf(report);
    const place = report.metadata.role === 'manager' ? report.metadata.agency : report.metadata.region;
    doc.save(`Checklist_Mensual_${ROLE_LABELS[report.metadata.role].replace(/\s+/g, '_')}_${place.replace(/\s+/g, '_')}_${report.metadata.reportDate}.pdf`);
  };

  const reset = () => {
    if (!window.confirm('¿Limpiar el formulario actual? Los reportes ya guardados no se eliminarán.')) return;
    setMetadata(emptyMetadata(role));
    setStates(emptyStates(role));
    setReportId(createReportId());
    setMessage('');
  };

  const loadReport = (report: SavedReport) => {
    setRole(report.metadata.role);
    setMetadata(report.metadata);
    setStates(report.itemStates);
    setReportId(report.id);
    setMessage('Reporte cargado desde el archivo local.');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const removeReport = async (id: string) => {
    if (!window.confirm('¿Eliminar este reporte del almacenamiento local?')) return;
    await deleteReport(id);
    setReports(await getReports());
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-inner">
          <div className="brand-lockup"><div className="logo-box"><img src={`${import.meta.env.BASE_URL}vento-logo.jpg`} alt="Vento" /></div><div><span className="eyebrow light">CONTROL OPERATIVO</span><h1>Checklist mensual de evidencias</h1><p>Entregables mensuales con trazabilidad local, evidencias y exportación optimizada a PDF.</p></div></div>
          <div className="hero-badge"><ShieldCheck size={25} /><div><strong>Guardado local</strong><span>Sin envío a servidor</span></div></div>
        </div>
      </header>

      <main className="page">
        <section className="role-switcher">
          {(Object.keys(ROLE_LABELS) as ChecklistRole[]).map((r) => <button key={r} className={r === role ? 'active' : ''} onClick={() => switchRole(r)}><span>{ROLE_LABELS[r]}</span><small>→ {ROLE_DESTINATIONS[r]}</small></button>)}
        </section>

        <section className="summary-card">
          <div className="section-heading"><div><span className="eyebrow">CARÁTULA DEL REPORTE</span><h2>{ROLE_LABELS[role]} <span>→ {ROLE_DESTINATIONS[role]}</span></h2></div><div className="progress-badge"><strong>{progress}%</strong><span>{reviewed}/{items.length} revisados</span></div></div>
          <div className="form-grid">
            {role === 'manager' ? <SearchSelect label="Agencia" value={metadata.agency} options={agencyOptions} placeholder="Buscar agencia por número o nombre" onChange={selectAgency} /> : <SearchSelect label="Región" value={metadata.region} options={regionOptions} placeholder="Buscar región" onChange={selectRegion} />}
            <label className="field"><span>Nombre del responsable</span><input value={metadata.reporterName} onChange={(e) => setMetadata((m) => ({ ...m, reporterName: e.target.value }))} placeholder={`Nombre del ${ROLE_LABELS[role]}`} /></label>
            <label className="field"><span>Fecha del reporte</span><input type="date" value={metadata.reportDate} onChange={(e) => setMetadata((m) => ({ ...m, reportDate: e.target.value }))} /></label>
            {role === 'manager' && <label className="field"><span>Región</span><input value={metadata.region} onChange={(e) => setMetadata((m) => ({ ...m, region: e.target.value }))} /></label>}
            {role !== 'senior' && <label className="field"><span>Regional Sr. / líder regional</span><input value={metadata.regionalManager} onChange={(e) => setMetadata((m) => ({ ...m, regionalManager: e.target.value }))} /></label>}
            <label className="field"><span>Distrito</span><input value={metadata.district} onChange={(e) => setMetadata((m) => ({ ...m, district: e.target.value }))} /></label>
            <label className="field"><span>Gerente Distrital</span><input value={metadata.districtManager} onChange={(e) => setMetadata((m) => ({ ...m, districtManager: e.target.value }))} /></label>
          </div>
          <div className="stat-strip"><div><strong>{items.length}</strong><span>Entregables</span></div><div><strong>{evidenceCount}</strong><span>Evidencias cargadas</span></div><div><strong>{items.filter(i => states[i.id]?.status === 'not_complies').length}</strong><span>No cumple</span></div><div><strong>{items.filter(i => states[i.id]?.status === 'na').length}</strong><span>No aplica</span></div></div>
        </section>

        <div className="checklist-heading"><div><span className="eyebrow">ENTREGABLES MENSUALES</span><h2>Revisión y evidencia</h2><p>Cada punto admite hasta 3 evidencias: imágenes, archivos o enlaces.</p></div></div>

        <section className="checklist-list">
          {items.map((item, index) => <ChecklistCard key={item.id} item={item} index={index} state={states[item.id] || { status: 'pending', comment: '', evidences: [null, null, null] }} onChange={(state) => setStates((prev) => ({ ...prev, [item.id]: state }))} />)}
        </section>

        <section className="action-bar">
          <div>{message && <div className="message"><FileCheck2 size={17} />{message}</div>}</div>
          <div className="action-buttons"><button className="secondary" onClick={reset}><RotateCcw size={17} /> Limpiar</button><button className="secondary" onClick={() => handlePdf()}><Download size={17} /> Exportar PDF</button><button className="primary" onClick={handleSave}><Save size={17} /> Guardar local</button></div>
        </section>

        <ReportHistory reports={reports} onLoad={loadReport} onDelete={removeReport} onPdf={handlePdf} />
      </main>
      <footer>Vento Motorcycles U.S.A. · Checklist mensual de entregables · Datos almacenados únicamente en el navegador del dispositivo.</footer>
    </div>
  );
}
