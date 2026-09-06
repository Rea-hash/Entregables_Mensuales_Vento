# Lógica de ponderación y calificación

Documento de referencia (UX / negocio) sobre cómo se calcula la **Calificación ponderada** que aparece en el header de la app y en el PDF exportado. Aplica igual a los tres checklists (Gerente de Agencia, Regional Jr., Regional Sr.) y a las dos marcas (Vento y American Piston), porque ambas comparten el mismo catálogo de preguntas — solo cambia el catálogo de agencias.

Implementación de referencia: [`src/scoring.ts`](src/scoring.ts). Este documento describe su comportamiento; si el código cambia, este archivo debe actualizarse junto con él.

---

## 1. Los estatus posibles

Cada entregable se marca con uno de estos cuatro estados:

| Estatus | Significado | ¿Entra al cálculo? |
|---|---|---|
| **Cumple** | Se entregó conforme al estándar | Sí — suma su peso completo |
| **No cumple** | No se entregó o no cumplió el estándar | Sí — resta oportunidad (cuenta en el total, pero no suma) |
| **No aplica** | No corresponde a esa agencia/región este mes | No — se descarta del cálculo |
| **Pendiente** | Aún no revisado | No — se descarta del cálculo (provisional) |

## 2. Peso base según periodicidad

El peso de cada entregable **no es arbitrario**: se deriva automáticamente del texto de periodicidad que ya existe en el catálogo (`data.ts`), para no duplicar información ni tener que mantenerla a mano en dos lugares.

| Periodicidad detectada | Peso base | Justificación |
|---|---|---|
| Dos fechas fijas al mes (ej. "5 y 20 de cada mes") | **2** | Se exige dos veces al mes → el doble de peso que un mensual |
| "SEMANAL" | **4** | Se exige ~4 veces al mes |
| "Mensual" o cualquier otro texto con periodicidad | **1** | Caso base — un entregable por mes |
| Vacía, o el ítem está marcado como informativo | **0** | No es un entregable medible — no pondera (ver sección 4) |

La detección es por texto (`parseExpectedCount` en `scoring.ts`): busca dos o más números en el texto de periodicidad (fechas) o la palabra "SEMANAL"; si no encuentra ninguno de los dos, asume 1.

## 3. Entregables prioritarios (peso doble)

Cinco entregables se marcaron como **prioritarios** (`critical: true` en `data.ts`) porque el negocio los considera preponderantes sin importar su periodicidad:

- Resumen de So's
- Resumen de To's
- Resumen de J's
- Resumen de Po's
- Ventas por vendedor

**Regla:** su peso final = peso base × **2**. Si se marca "No aplica" o queda "Pendiente", su peso simplemente no participa ese mes (ver sección 5) — no hay redistribución manual del ×2 hacia otros ítems, la fórmula ponderada ya lo hace sola.

> Importante: el ×2 se aplica sobre el **peso base propio** del ítem, no lo hace "el más pesado del checklist". Por eso puede coincidir numéricamente con otro ítem no prioritario que ya tenga peso 2 por su propia periodicidad (ej. un entregable quincenal). La UI y el PDF siempre muestran el peso final aplicado junto a la etiqueta "Prioritario" para que esto sea explícito.

## 4. Puntos informativos (no ponderan)

El punto **"Desvíos relevantes durante el mes..."** (presente en los 3 niveles) es una bitácora de contexto, no un entregable medible. Se marcó `informational: true` y por diseño:

- No tiene botones de Cumple/No cumple/No aplica.
- No tiene estándar ni campo de "veces realizado".
- Peso = 0 siempre, sin importar su texto de periodicidad.
- Solo admite comentarios y evidencia de respaldo.

## 5. Descarte y reasignación automática de peso

La calificación final es un **promedio ponderado**, calculado únicamente sobre los ítems "aplicables" del mes:

```
Calificación % = ( Σ peso_i · cumple_i )  ×100
                 -----------------------
                     Σ peso_i

  para todo ítem i marcado Cumple o No cumple
  (cumple_i = 1 si Cumple, 0 si No cumple)
```

Los ítems en **No aplica**, **Pendiente** o **informativos** se excluyen tanto del numerador como del denominador. Esto logra el "descarte y reasignación" que pedía el negocio **sin ninguna lógica adicional de redistribución manual**: al salir un ítem de la división, el peso restante automáticamente representa el 100% de la base de cálculo. Ejemplo:

- 3 ítems de peso 2 cada uno (total 6). Si uno se marca "No aplica", quedan 2 ítems de peso 2 (total 4) — cada uno ahora vale el 50% de la calificación en vez del 33%, sin que nadie tenga que recalcular ni reasignar nada a mano.

## 6. Aporte individual de cada ítem (para poder sumarlos)

Cada entregable evaluado muestra un chip **"Aporte a la calificación: +X%"** junto a "Veces realizado este mes". Sumando el aporte de *todos* los entregables revisados (Cumple + No cumple) se obtiene **exactamente** el mismo número que el badge del header — no es una aproximación.

Para lograr esto con números enteros que sumen exacto (y no fracciones que casi cuadran), se usa el **método de resto mayor (Hamilton)**:

1. A cada ítem en "Cumple" se le asigna una cuota exacta = `(peso_i / peso total de los que cumplen) × calificación%`.
2. Se toma la parte entera de cada cuota.
3. Si falta repartir puntos enteros (por el redondeo), se entregan uno por uno a los ítems con la fracción decimal más alta, hasta completar exactamente el % del badge.
4. Los ítems en "No cumple" siempre aportan **0%** (restaron peso al total, pero no sumaron puntos).
5. Los ítems en "No aplica", "Pendiente" o informativos no muestran aporte (no participan).

Esto es lo mismo que hace un reparto de escaños o presupuesto: nunca se pierde ni se inventa un punto porcentual por el redondeo.

## 7. Umbral de aceptación y colores

| Rango | Etiqueta | Color |
|---|---|---|
| ≥ 95% | Óptimo | Verde |
| 85% – 94% | Aceptable | Ámbar |
| < 85% | Crítico | Rojo |

**85% es el mínimo aceptable** — por debajo de ese umbral la calificación se muestra en rojo como "Crítico", tanto en el header como en el PDF.

Los estatus individuales también usan colores fijos para identificación rápida: **verde = Cumple, rojo = No cumple, amarillo = No aplica**.

## 8. Tabla de pesos — Gerente de Agencia (17 entregables)

| # | Entregable | Periodicidad | Peso base | Prioritario | Peso final |
|---|---|---|---|---|---|
| 1 | Inventario cíclico | 5 y 20 de cada mes | 2 | — | 2 |
| 2 | Tickets abiertos de garantía (Postventa) | 6 y 20 de cada mes | 2 | — | 2 |
| 3 | Tickets abiertos de Mantenimiento | 7 y 20 de cada mes | 2 | — | 2 |
| 4 | Resumen de CAT | 8 y 20 de cada mes | 2 | — | 2 |
| 5 | Resumen de SO'S | Mensual | 1 | ✓ ×2 | 2 |
| 6 | Resumen de TO'S | Mensual | 1 | ✓ ×2 | 2 |
| 7 | Resumen de J'S | Mensual | 1 | ✓ ×2 | 2 |
| 8 | Resumen de PO'S | Mensual | 1 | ✓ ×2 | 2 |
| 9 | Resumen de RMA | Mensual | 1 | — | 1 |
| 10 | Timbrado pendiente | Mensual | 1 | — | 1 |
| 11 | Resumen de cajas chicas | Mensual | 1 | — | 1 |
| 12 | Ventas por vendedor | Mensual | 1 | ✓ ×2 | 2 |
| 13 | Resultado de prospección por vendedor | Mensual | 1 | — | 1 |
| 14 | Gestión de leads por vendedor | Mensual | 1 | — | 1 |
| 15 | Motivos de cierre de leads por vendedor | Mensual | 1 | — | 1 |
| 16 | Evaluación vendedores (intranet) | Semanal | 4 | — | 4 |
| 17 | Desvíos relevantes durante el mes | — | 0 (informativo) | — | 0 |

**Peso total disponible si se revisan los 16 entregables medibles: 28 puntos.**

## 9. Tabla de pesos — Regional Jr. y Regional Sr. (25 entregables, idéntica estructura)

Ambos niveles comparten exactamente el mismo catálogo de 25 preguntas.

| # | Entregable | Periodicidad | Peso base | Prioritario | Peso final |
|---|---|---|---|---|---|
| 1 | Ventas por agencia por vendedor | Mensual | 1 | — | 1 |
| 2 | Rotación de personal mensual, Actas, Exhortos, Planes de acción, Retros | Mensual | 1 | — | 1 |
| 3 | Resultado penetración de financieras (Obj: 40%) | Mensual | 1 | — | 1 |
| 4 | Inventarios – Semáforos 20% máximo entre rojo y negro | Mensual | 1 | — | 1 |
| 5 | Inventarios – SS vs Semáforos Rojos y Negros 0% | Mensual | 1 | — | 1 |
| 6 | Problemas operativos (herramientas, servicios esenciales, validaciones) | Mensual | 1 | — | 1 |
| 7 | Reporte tickets de garantías (5%) | Mensual | 1 | — | 1 |
| 8 | Permisos de agencias (funcionamiento) | Mensual | 1 | — | 1 |
| 9 | Resumen de mantenimiento | Mensual | 1 | — | 1 |
| 10 | Cumplimiento de inventarios cíclicos | Mensual | 1 | — | 1 |
| 11 | Tickets abiertos de garantía (Postventa) | Mensual | 1 | — | 1 |
| 12 | Tickets abiertos de Mantenimiento | Mensual | 1 | — | 1 |
| 13 | Resumen de CAT | Mensual | 1 | — | 1 |
| 14 | Resumen de SO'S | Mensual | 1 | ✓ ×2 | 2 |
| 15 | Resumen de TO'S | Mensual | 1 | ✓ ×2 | 2 |
| 16 | Resumen de J'S | Mensual | 1 | ✓ ×2 | 2 |
| 17 | Resumen de PO'S | Mensual | 1 | ✓ ×2 | 2 |
| 18 | Resumen de RMA | Mensual | 1 | — | 1 |
| 19 | Timbrado pendiente | Mensual | 1 | — | 1 |
| 20 | Ventas por vendedor | Mensual | 1 | ✓ ×2 | 2 |
| 21 | Resultado de prospección por vendedor | Mensual | 1 | — | 1 |
| 22 | Gestión de leads por vendedor | Mensual | 1 | — | 1 |
| 23 | Motivos de cierre de leads por vendedor | Mensual | 1 | — | 1 |
| 24 | Evaluación vendedores (intranet) | Mensual | 1 | — | 1 |
| 25 | Desvíos relevantes durante el mes | Mensual | 0 (informativo) | — | 0 |

**Peso total disponible si se revisan los 24 entregables medibles: 29 puntos.**

> Nota: a diferencia del checklist de Gerente, aquí "Evaluación vendedores" tiene periodicidad "Mensual" (peso 1), no "Semanal" — cada nivel puede tener su propia periodicidad para el mismo título; el cálculo siempre respeta el dato capturado en `data.ts` para ese ítem específico.

## 10. Ejemplo numérico completo (Gerente de Agencia)

Supongamos que en un mes se revisan así los 17 ítems del Gerente:

| Resultado | Ítems | Peso involucrado |
|---|---|---|
| Cumple | Inventario cíclico (2), Resumen SO'S (2, prioritario), Resumen CAT (2) | 6 |
| No cumple | Tickets garantía Postventa (2) | 2 |
| No aplica | Evaluación vendedores (4) — descartado | 0 (excluido) |
| Pendiente | El resto (12 ítems) — aún no revisados | 0 (excluido) |

- Peso total considerado = 6 + 2 = **8** (el peso 4 de "No aplica" y el peso de los pendientes no cuentan).
- Peso cumplido = **6**.
- Calificación = 6 / 8 × 100 = **75%** → cae por debajo del 85% mínimo, se muestra en rojo ("Crítico").
- Aporte por ítem (reparto de resto mayor sobre 75 puntos, proporcional a sus pesos 2/2/2): 25% + 25% + 25% = 75% exacto. Tickets de Postventa (no cumple) aporta 0%.

## 11. Resumen para dirección (una frase por regla)

1. Entre más seguido se pide un entregable, más pesa (mensual=1, quincenal=2, semanal=4).
2. Cinco entregables clave del negocio pesan el doble, sin importar su periodicidad.
3. Un entregable no aplicable o aún sin revisar no cuenta ni a favor ni en contra — simplemente no está en la base del cálculo ese mes.
4. Un punto de bitácora (desvíos) es informativo puro: no suma ni resta nada.
5. El porcentaje final es matemáticamente la suma de lo que cada entregable "Cumple" aportó, y esa suma siempre coincide con el badge — se puede auditar entregable por entregable.
6. 85% es el piso aceptable; por debajo de eso el resultado se marca en rojo como crítico.
