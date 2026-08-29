import { useEffect, useMemo, useState } from 'react';
import { Download, FileCheck2, RotateCcw, Save, ShieldCheck } from 'lucide-react';
import { CATALOG, CHECKLISTS, ROLE_DESTINATIONS, ROLE_LABELS, type ChecklistRole } from './data';
import { BRANDS, catalogForBrand, type BrandId } from './brands';
import type { ItemState, ReportMetadata, SavedReport } from './types';
import ChecklistCard from './components/ChecklistCard';
import SearchSelect from './components/SearchSelect';
import ReportHistory from './components/ReportHistory';
import { deleteReport, getReports, saveReport } from './storage';
import { generateMonthlyPdf } from './pdfGenerator';

// Creación y desarrollo original: Josue Sebastian Rea Garcia.
// Esta atribución se mantiene únicamente en el código fuente y no se muestra en la interfaz.

const mexicoDate = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

const emptyMetadata = (brand: BrandId, role: ChecklistRole): ReportMetadata => ({
  brand,
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
  const [brand, setBrand] = useState<BrandId>('vento');
  const [role, setRole] = useState<ChecklistRole>('manager');
  const [metadata, setMetadata] = useState<ReportMetadata>(() => emptyMetadata('vento', 'manager'));
  const [states, setStates] = useState<Record<string, ItemState>>(() => emptyStates('manager'));
  const [reportId, setReportId] = useState<string>(() => createReportId());
  const [reports, setReports] = useState<SavedReport[]>([]);
  const [message, setMessage] = useState('');
  const [dirty, setDirty] = useState(false);

  useEffect(() => { getReports().then(setReports).catch(console.error); }, []);
  useEffect(() => { document.body.dataset.brand = brand; }, [brand]);

  const brandConfig = BRANDS[brand];
  const items = CHECKLISTS[role];
  const reviewed = items.filter((i) => (states[i.id]?.status || 'pending') !== 'pending').length;
  const progress = items.length ? Math.round((reviewed / items.length) * 100) : 0;
  const evidenceCount = items.reduce((sum, i) => sum + (states[i.id]?.evidences.filter(Boolean).length || 0), 0);

  const activeCatalog = useMemo(() => catalogForBrand(CATALOG, brand), [brand]);
  const agencyOptions = useMemo(() => activeCatalog.map((r) => r.agency).filter(Boolean), [activeCatalog]);
  const regionOptions = useMemo(() => Array.from(new Set<string>(activeCatalog.map((r) => r.region).filter((region): region is string => Boolean(region)))).sort((a, b) => a.localeCompare(b, 'es')), [activeCatalog]);

  const updateMetadata = (patch: Partial<ReportMetadata>) => {
    setMetadata((m) => ({ ...m, ...patch }));
    setDirty(true);
  };

  const switchBrand = (next: BrandId) => {
    if (next === brand) return;
    if (dirty && !window.confirm('Hay cambios sin guardar en el reporte actual. ¿Cambiar de marca y descartar esos cambios?')) return;
    setBrand(next);
    setMetadata(emptyMetadata(next, role));
    setStates(emptyStates(role));
    setReportId(createReportId());
    setMessage('');
    setDirty(false);
  };

  const switchRole = (next: ChecklistRole) => {
    if (next === role) return;
    if (dirty && !window.confirm('Hay cambios sin guardar en el reporte actual. ¿Cambiar de nivel y descartar esos cambios?')) return;
    setRole(next);
    setMetadata(emptyMetadata(brand, next));
    setStates(emptyStates(next));
    setReportId(createReportId());
    setMessage('');
    setDirty(false);
  };

  const selectAgency = (agency: string) => {
    const row = activeCatalog.find((r) => r.agency === agency);
    if (!row) return;
    updateMetadata({ agency, region: row.region, regionalManager: row.regionalManager, district: row.district, districtManager: row.districtManager });
  };

  const selectRegion = (region: string) => {
    const row = activeCatalog.find((r) => r.region === region);
    if (!row) return;
    updateMetadata({ region, regionalManager: row.regionalManager, district: row.district, districtManager: row.districtManager });
  };

  const buildReport = (): SavedReport => {
    const now = new Date().toISOString();
    return { id: reportId, createdAt: now, updatedAt: now, metadata: { ...metadata, brand, role }, itemStates: states };
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
    setDirty(false);
    setMessage(`Reporte ${brandConfig.shortName} guardado localmente en este navegador.`);
  };

  const handlePdf = async (source?: SavedReport) => {
    const report = source || buildReport();
    if (!source) {
      const error = validate();
      if (error) { setMessage(error); return; }
    }
    const doc = await generateMonthlyPdf(report);
    const place = report.metadata.role === 'manager' ? report.metadata.agency : report.metadata.region;
    const reportBrand = BRANDS[report.metadata.brand || 'vento'];
    doc.save(`${reportBrand.pdfFilePrefix}_Checklist_Mensual_${ROLE_LABELS[report.metadata.role].replace(/\s+/g, '_')}_${place.replace(/\s+/g, '_')}_${report.metadata.reportDate}.pdf`);
  };

  const reset = () => {
    if (!window.confirm('¿Limpiar el formulario actual? Los reportes ya guardados no se eliminarán.')) return;
    setMetadata(emptyMetadata(brand, role));
    setStates(emptyStates(role));
    setReportId(createReportId());
    setMessage('');
    setDirty(false);
  };

  const loadReport = (report: SavedReport) => {
    if (dirty && !window.confirm('Hay cambios sin guardar en el reporte actual. ¿Abrir el reporte guardado y descartar esos cambios?')) return;
    const reportBrand = report.metadata.brand || 'vento';
    setBrand(reportBrand);
    setRole(report.metadata.role);
    setMetadata({ ...report.metadata, brand: reportBrand });
    setStates(report.itemStates);
    setReportId(report.id);
    setDirty(false);
    setMessage('Reporte cargado desde el archivo local.');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const removeReport = async (id: string) => {
    if (!window.confirm('¿Eliminar este reporte del almacenamiento local?')) return;
    await deleteReport(id);
    setReports(await getReports());
  };

  return (
    <div className={`app-shell brand-${brand}`}>
      <header className="hero">
        <div className="hero-inner">
          <div className="brand-lockup">
            <div className="logo-box"><img src={`${import.meta.env.BASE_URL}${brandConfig.logo}`} alt={brandConfig.shortName} /></div>
            <div><span className="eyebrow light">CONTROL OPERATIVO · GRUPO VNA</span><h1>Entregables Mensuales Grupo VNA</h1><p>Checklist mensual de evidencias con trazabilidad local y exportación optimizada a PDF.</p></div>
          </div>
          <div className="hero-tools">
            <div className="brand-switcher" aria-label="Seleccionar marca">
              {(Object.keys(BRANDS) as BrandId[]).map((id) => <button key={id} type="button" className={brand === id ? 'active' : ''} onClick={() => switchBrand(id)}>{BRANDS[id].shortName}</button>)}
            </div>
            <div className="hero-badge"><ShieldCheck size={25} /><div><strong>Guardado local</strong><span>Sin envío a servidor</span></div></div>
          </div>
        </div>
      </header>

      <main className="page">
        <section className="role-switcher">
          {(Object.keys(ROLE_LABELS) as ChecklistRole[]).map((r) => <button key={r} className={r === role ? 'active' : ''} onClick={() => switchRole(r)}><span>{ROLE_LABELS[r]}</span><small>→ {ROLE_DESTINATIONS[r]}</small></button>)}
        </section>

        <section className="summary-card">
          <div className="section-heading"><div><span className="eyebrow">CARÁTULA DEL REPORTE · {brandConfig.shortName.toUpperCase()}</span><h2>{ROLE_LABELS[role]} <span>→ {ROLE_DESTINATIONS[role]}</span></h2></div><div className="progress-badge"><strong>{progress}%</strong><span>{reviewed}/{items.length} revisados</span></div></div>
          <div className="form-grid">
            {role === 'manager' ? <SearchSelect label="Agencia" value={metadata.agency} options={agencyOptions} placeholder="Buscar agencia por número o nombre" onChange={selectAgency} /> : <SearchSelect label="Región" value={metadata.region} options={regionOptions} placeholder="Buscar región" onChange={selectRegion} />}
            <label className="field"><span>Nombre del responsable</span><input value={metadata.reporterName} onChange={(e) => updateMetadata({ reporterName: e.target.value })} placeholder={`Nombre del ${ROLE_LABELS[role]}`} /></label>
            <label className="field"><span>Fecha del reporte</span><input type="date" value={metadata.reportDate} onChange={(e) => updateMetadata({ reportDate: e.target.value })} /></label>
            {role === 'manager' && <label className="field"><span>Región</span><input value={metadata.region} onChange={(e) => updateMetadata({ region: e.target.value })} /></label>}
            {role !== 'senior' && <label className="field"><span>Regional Sr. / líder regional</span><input value={metadata.regionalManager} onChange={(e) => updateMetadata({ regionalManager: e.target.value })} /></label>}
            <label className="field"><span>Distrito</span><input value={metadata.district} onChange={(e) => updateMetadata({ district: e.target.value })} /></label>
            <label className="field"><span>Gerente Distrital</span><input value={metadata.districtManager} onChange={(e) => updateMetadata({ districtManager: e.target.value })} /></label>
          </div>
          <div className="stat-strip"><div><strong>{items.length}</strong><span>Entregables</span></div><div><strong>{evidenceCount}</strong><span>Evidencias cargadas</span></div><div><strong>{items.filter(i => states[i.id]?.status === 'not_complies').length}</strong><span>No cumple</span></div><div><strong>{items.filter(i => states[i.id]?.status === 'na').length}</strong><span>No aplica</span></div></div>
        </section>

        <div className="checklist-heading"><div><span className="eyebrow">ENTREGABLES MENSUALES</span><h2>Revisión y evidencia</h2><p>Cada punto admite hasta 3 evidencias: imágenes, archivos o enlaces.</p></div></div>

        <section className="checklist-list">
          {items.map((item, index) => <ChecklistCard key={item.id} item={item} index={index} state={states[item.id] || { status: 'pending', comment: '', evidences: [null, null, null] }} onChange={(state) => { setStates((prev) => ({ ...prev, [item.id]: state })); setDirty(true); }} />)}
        </section>

        <section className="action-bar">
          <div>{message && <div className="message"><FileCheck2 size={17} />{message}</div>}</div>
          <div className="action-buttons"><button className="secondary" onClick={reset}><RotateCcw size={17} /> Limpiar</button><button className="secondary" onClick={() => handlePdf()}><Download size={17} /> Exportar PDF</button><button className="primary" onClick={handleSave}><Save size={17} /> Guardar local</button></div>
        </section>

        <ReportHistory reports={reports} currentBrand={brand} onLoad={loadReport} onDelete={removeReport} onPdf={handlePdf} />
      </main>
      <footer className="legal-footer">
        <strong>{brandConfig.legalHeadline}</strong>
        <span>Este documento y las evidencias asociadas pueden contener información operativa, comercial o administrativa de carácter confidencial. Queda prohibida su reproducción, distribución, divulgación o uso por personas no autorizadas. Los reportes se almacenan únicamente en el navegador del dispositivo salvo exportación voluntaria a PDF.</span>
      </footer>
    </div>
  );
}
