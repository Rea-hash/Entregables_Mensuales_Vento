import type { CatalogRow } from './data';

// Creación y desarrollo original: Josue Sebastian Rea Garcia.
// Firma interna de autoría. No se muestra en la interfaz ni en documentos exportados.

export type BrandId = 'vento' | 'american-piston';

export interface BrandConfig {
  id: BrandId;
  shortName: string;
  corporateName: string;
  logo: string;
  operationLabel: string;
  legalHeadline: string;
  legalBody: string;
  pdfFilePrefix: string;
}

export const BRANDS: Record<BrandId, BrandConfig> = {
  vento: {
    id: 'vento',
    shortName: 'Vento',
    corporateName: 'Vento Motorcycles U.S.A.',
    logo: 'vento-logo.jpg',
    operationLabel: 'Operación Vento',
    legalHeadline: 'INFORMACIÓN CONFIDENCIAL · USO INTERNO EXCLUSIVO DE VENTO MOTORCYCLES U.S.A.',
    legalBody: 'Documento operativo. Prohibida su reproducción, distribución o divulgación a personas no autorizadas.',
    pdfFilePrefix: 'Vento',
  },
  'american-piston': {
    id: 'american-piston',
    shortName: 'American Piston',
    corporateName: 'American Piston',
    logo: 'american-piston-logo.jpg',
    operationLabel: 'Operación American Piston',
    legalHeadline: 'INFORMACIÓN CONFIDENCIAL · USO INTERNO EXCLUSIVO DE AMERICAN PISTON',
    legalBody: 'Documento operativo. Prohibida su reproducción, distribución o divulgación a personas no autorizadas.',
    pdfFilePrefix: 'American_Piston',
  },
};

export function isAmericanPistonAgency(agency: string): boolean {
  return /^19\d{3}\b/.test(agency.trim());
}

export function catalogForBrand(catalog: CatalogRow[], brand: BrandId): CatalogRow[] {
  if (brand === 'american-piston') return catalog.filter((row) => isAmericanPistonAgency(row.agency));
  // Vento conserva el catálogo histórico salvo las agencias 19xxx, reservadas para American Piston.
  return catalog.filter((row) => !isAmericanPistonAgency(row.agency));
}
