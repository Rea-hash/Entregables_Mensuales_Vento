# Entregables Mensuales Grupo VNA

Aplicación React + TypeScript + Vite para el control mensual de entregables de **Vento** y **American Piston**.

## Marcas

- Vento: catálogo operativo general, excluyendo agencias `19xxx`.
- American Piston: exclusivamente agencias con sintaxis `19xxx`.
- Las regiones de cada marca se derivan automáticamente de las agencias disponibles para esa marca.
- Las preguntas de los tres niveles son compartidas: cualquier ajuste al checklist aplica a ambas marcas.

## Niveles

- Gerente de Agencia → Regional Jr. / Regional Sr.
- Regional Jr. → Regional Sr.
- Regional Sr. → Distrital

## Funciones

- Selector de marca en header con identidad visual independiente.
- Vento: azul/blanco.
- American Piston: negro con acentos rojos.
- Autocompletado de región, líder regional, distrito y distrital desde catálogo.
- Campos autocompletados editables manualmente.
- Estados Cumple / No cumple / No aplica / pendiente.
- Hasta 3 evidencias por entregable: imagen, archivo o enlace.
- Fotografías visibles en PDF conservando su relación de aspecto.
- Archivos y enlaces identificados en PDF; enlaces web clicables.
- PDF y leyendas de confidencialidad adaptados a la marca seleccionada.
- Guardado local con IndexedDB, sin servidor ni monitor externo.
- Historial unificado con filtro por marca.
- Compatibilidad con reportes Vento guardados antes de la versión multimarca.
- Advertencia al cambiar marca/nivel o abrir otro reporte cuando existen cambios sin guardar.

## Desarrollo

```bash
npm install
npm run dev
```

## Validación

```bash
npm run lint
npm run build
```

## Producción

El contenido de `dist/` puede publicarse en GitHub Pages o Vercel.

> El almacenamiento es local al navegador/dispositivo. Limpiar los datos del sitio elimina los reportes guardados.

---
Creación y desarrollo original: **Josue Sebastian Rea Garcia**.
