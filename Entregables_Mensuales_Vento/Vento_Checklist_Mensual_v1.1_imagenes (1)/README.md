# Vento · Checklist mensual de evidencias

Aplicación React + TypeScript + Vite para control mensual de entregables en tres niveles:

- Gerente de Agencia → Regional Jr. / Regional Sr.
- Regional Jr. → Regional Sr.
- Regional Sr. → Distrital

## Funciones

- Catálogo de 336 agencias y 28 regiones.
- Autocompletado de región, líder regional, distrito y distrital desde el catálogo.
- Campos autocompletados editables manualmente.
- Estados Cumple / No cumple / No aplica / pendiente.
- Hasta 3 evidencias por entregable: imagen, archivo o enlace.
- Imágenes visibles directamente en el PDF.
- Archivos y enlaces identificados en PDF; enlaces web son clicables.
- Guardado local con IndexedDB, sin servidor ni monitor externo.
- Historial local para abrir, reexportar o eliminar reportes.
- PDF multipágina optimizado con jsPDF.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
```

El contenido de `dist/` puede publicarse en Vercel o GitHub Pages. En Vercel no requiere backend.

> Nota: el almacenamiento es local al navegador/dispositivo. Limpiar datos del sitio elimina los reportes guardados.
