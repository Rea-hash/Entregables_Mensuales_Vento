import type { ChecklistItem } from './data';
import type { ComplianceStatus, ItemState } from './types';

// Creación y desarrollo original: Josue Sebastian Rea Garcia.

/**
 * Metodología de calificación (aplica igual a los 3 niveles y a ambas marcas,
 * porque el catálogo de preguntas es compartido — ver README):
 *
 * 1. Cada entregable tiene un peso base según su periodicidad esperada:
 *      - Dos fechas fijas al mes ("X y Y de cada mes")  -> 2
 *      - "SEMANAL"                                        -> 4
 *      - "Mensual" o cualquier otro texto                 -> 1
 *      - Periodicidad vacía (ítem puramente informativo)  -> 0 (no participa en el cálculo)
 * 2. Los entregables preponderantes (marcados `critical` en data.ts: Resumen de
 *    So's/To's/J's/Po's y Ventas por vendedor) duplican su peso base.
 * 3. La calificación final es un promedio ponderado sobre los ítems "aplicables":
 *    los marcados "No aplica", los que aún están "Pendiente" de revisión y los
 *    informativos (peso 0) se excluyen tanto del numerador como del denominador.
 *    Esto rebalancea el peso automáticamente sin redistribución manual: si un
 *    ítem preponderante se descarta, su peso simplemente sale de la división.
 *
 *      Calificación % = (Σ peso_i · cumple_i) / (Σ peso_i)  ×100
 *      para todo i con status ∈ {complies, not_complies}
 */

const CRITICAL_MULTIPLIER = 2;

export function parseExpectedCount(periodicity: string): number {
  const text = (periodicity || '').trim();
  if (!text) return 0;
  if (/\bsemanal\b/i.test(text)) return 4;
  const dateMatches = text.match(/\b\d{1,2}\b/g);
  if (dateMatches && dateMatches.length >= 2) return dateMatches.length;
  return 1;
}

export function getItemWeight(item: ChecklistItem): number {
  if (item.informational) return 0;
  const base = parseExpectedCount(item.periodicity);
  if (base === 0) return 0;
  return item.critical ? base * CRITICAL_MULTIPLIER : base;
}

export function isScorable(item: ChecklistItem): boolean {
  return getItemWeight(item) > 0;
}

export interface SuggestionResult {
  status: ComplianceStatus;
  reason: string;
}

/** Sugiere un status a partir de "veces realizadas" vs. el estándar esperado. No fuerza nada: la UI decide si auto-aplicar o solo insinuar. */
export function suggestStatus(item: ChecklistItem, actualCount: number | undefined): SuggestionResult | null {
  if (item.informational) return null;
  const expected = parseExpectedCount(item.periodicity);
  if (expected === 0 || actualCount === undefined || Number.isNaN(actualCount)) return null;
  if (actualCount >= expected) return { status: 'complies', reason: `${actualCount}/${expected} realizados` };
  return { status: 'not_complies', reason: `${actualCount}/${expected} realizados` };
}

export interface ScoreBreakdown {
  percent: number | null;
  earnedWeight: number;
  totalWeight: number;
  consideredItems: number;
  excludedNa: number;
  excludedPending: number;
  excludedInformational: number;
}

export function computeScore(items: ChecklistItem[], states: Record<string, ItemState>): ScoreBreakdown {
  let earnedWeight = 0;
  let totalWeight = 0;
  let consideredItems = 0;
  let excludedNa = 0;
  let excludedPending = 0;
  let excludedInformational = 0;

  for (const item of items) {
    const weight = getItemWeight(item);
    if (weight === 0) { excludedInformational++; continue; }
    const status = states[item.id]?.status || 'pending';
    if (status === 'na') { excludedNa++; continue; }
    if (status === 'pending') { excludedPending++; continue; }
    totalWeight += weight;
    consideredItems++;
    if (status === 'complies') earnedWeight += weight;
  }

  return {
    percent: totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : null,
    earnedWeight,
    totalWeight,
    consideredItems,
    excludedNa,
    excludedPending,
    excludedInformational,
  };
}

export function scoreLabel(percent: number | null): string {
  if (percent === null) return 'Sin calificar';
  if (percent >= 95) return 'Óptimo';
  if (percent >= 85) return 'Aceptable';
  return 'Crítico';
}
