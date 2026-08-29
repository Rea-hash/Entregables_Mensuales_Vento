export type ChecklistRole = 'manager' | 'junior' | 'senior';

export interface ChecklistItem {
  id: string;
  title: string;
  responsible: string;
  periodicity: string;
  delivery: string;
}

export interface CatalogRow {
  agency: string;
  districtManager: string;
  regionalManager: string;
  district: string;
  region: string;
}

export const ROLE_LABELS: Record<ChecklistRole, string> = {
  manager: 'Gerente de Agencia',
  junior: 'Regional Jr.',
  senior: 'Regional Sr.',
};

export const ROLE_DESTINATIONS: Record<ChecklistRole, string> = {
  manager: 'Regional Jr. / Regional Sr.',
  junior: 'Regional Sr.',
  senior: 'Distrital',
};

export const CHECKLISTS: Record<ChecklistRole, ChecklistItem[]> = {
  "manager": [
    {
      "id": "manager_1",
      "title": "INVENTARIO CICLICO",
      "responsible": "Gerente",
      "periodicity": "5 y 20  de cada mes",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_2",
      "title": "Tickets abiertos de garantía (Postventa)",
      "responsible": "Gerente",
      "periodicity": "6 y 20 de cada mes",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_3",
      "title": "Tickets abiertos de Mantenimiento",
      "responsible": "Gerente",
      "periodicity": "7 y 20 de cada mes",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_4",
      "title": "RESUMEN DE CAT",
      "responsible": "Gerente",
      "periodicity": "8 y 20 de cada mes",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_5",
      "title": "RESUMEN DE SO'S",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_6",
      "title": "RESUMEN DE TO'S",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_7",
      "title": "RESUMEN DE J'S",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_8",
      "title": "RESUMEN DE PO'S",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_9",
      "title": "RESUMEN DE RMA",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_10",
      "title": "TIMBRADO PENDIENTE",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_11",
      "title": "RESUMEN DE CAJAS CHICAS",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_12",
      "title": "VENTAS POR VENDEDOR",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_13",
      "title": "RESULTADO DE PROSPECCION POR VENDEDOR",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_14",
      "title": "GESTION DE LEADS POR VENDEDOR",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_15",
      "title": "MOTIVOS DE CIERRE DE LEADS POR VENDEDOR",
      "responsible": "Gerente",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_16",
      "title": "EVALUACION VENDEDORES (INTRANET)",
      "responsible": "Gerente",
      "periodicity": "SEMANAL",
      "delivery": "Cierre de mes"
    },
    {
      "id": "manager_17",
      "title": "DESVIOS RELEVANTES DURANTE EL MES: CIERRES, INCIDENCIAS, FALLAS DE INTERNET, LUZ , ETC.",
      "responsible": "Gerente",
      "periodicity": "",
      "delivery": ""
    }
  ],
  "junior": [
    {
      "id": "junior_1",
      "title": "Ventas por agencia por vendedor",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_2",
      "title": "Rotacion de personal mensual, Actas, Exhortos, Planes de accion, Retros",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_3",
      "title": "Resultado Penetracion de Financiaeras Obj: 40%",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_4",
      "title": "Inventarios - Semaforos 20% maximo entre rojo y negro",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_5",
      "title": "Inventarios - SS VS Semaforos Rojos y Negros 0%",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_6",
      "title": "Problemas operativos ( herramientas, Servicios esenciales, Validaciones, )",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_7",
      "title": "Reporte Tickets de Garantias: 5%",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_8",
      "title": "Permisos de Agencias (funcionamiento)",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_9",
      "title": "Resumen de Mantenimiento",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_10",
      "title": "Cumplimiento de inventarios ciclicos",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_11",
      "title": "Tickets abiertos de garantía (Postventa)",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_12",
      "title": "Tickets abiertos de Mantenimiento",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_13",
      "title": "RESUMEN DE CAT",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_14",
      "title": "RESUMEN DE SO'S",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_15",
      "title": "RESUMEN DE TO'S",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_16",
      "title": "RESUMEN DE J'S",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_17",
      "title": "RESUMEN DE PO'S",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_18",
      "title": "RESUMEN DE RMA",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_19",
      "title": "TIMBRADO PENDIENTE",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_20",
      "title": "VENTAS POR VENDEDOR",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_21",
      "title": "RESULTADO DE PROSPECCION POR VENDEDOR",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_22",
      "title": "GESTION DE LEADS POR VENDEDOR",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_23",
      "title": "MOTIVOS DE CIERRE DE LEADS POR VENDEDOR",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_24",
      "title": "EVALUACION VENDEDORES (INTRANET)",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "junior_25",
      "title": "DESVIOS RELEVANTES DURANTE EL MES: CIERRES, INCIDENCIAS, FALLAS DE INTERNET, LUZ , ETC.",
      "responsible": "Regional Jr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    }
  ],
  "senior": [
    {
      "id": "senior_1",
      "title": "Ventas por agencia por vendedor",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_2",
      "title": "Rotacion de personal mensual, Actas, Exhortos, Planes de accion, Retros",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_3",
      "title": "Resultado Penetracion de Financiaeras Obj: 40%",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_4",
      "title": "Inventarios - Semaforos 20% maximo entre rojo y negro",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_5",
      "title": "Inventarios - SS VS Semaforos Rojos y Negros 0%",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_6",
      "title": "Problemas operativos ( herramientas, Servicios esenciales, Validaciones, )",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_7",
      "title": "Reporte Tickets de Garantias: 5%",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_8",
      "title": "Permisos de Agencias (funcionamiento)",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_9",
      "title": "Resumen de Mantenimiento",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_10",
      "title": "Cumplimiento de inventarios ciclicos",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_11",
      "title": "Tickets abiertos de garantía (Postventa)",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_12",
      "title": "Tickets abiertos de Mantenimiento",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_13",
      "title": "RESUMEN DE CAT",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_14",
      "title": "RESUMEN DE SO'S",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_15",
      "title": "RESUMEN DE TO'S",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_16",
      "title": "RESUMEN DE J'S",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_17",
      "title": "RESUMEN DE PO'S",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_18",
      "title": "RESUMEN DE RMA",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_19",
      "title": "TIMBRADO PENDIENTE",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_20",
      "title": "VENTAS POR VENDEDOR",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_21",
      "title": "RESULTADO DE PROSPECCION POR VENDEDOR",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_22",
      "title": "GESTION DE LEADS POR VENDEDOR",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_23",
      "title": "MOTIVOS DE CIERRE DE LEADS POR VENDEDOR",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_24",
      "title": "EVALUACION VENDEDORES (INTRANET)",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    },
    {
      "id": "senior_25",
      "title": "DESVIOS RELEVANTES DURANTE EL MES: CIERRES, INCIDENCIAS, FALLAS DE INTERNET, LUZ , ETC.",
      "responsible": "Regional Sr.",
      "periodicity": "Mensual",
      "delivery": "Cierre de mes"
    }
  ]
};

export const CATALOG: CatalogRow[] = [
  {
    "agency": "16001 ROJO GOMEZ CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16002 INSURGENTES CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16003 CONDESA CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16004 SAN ANGEL CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16006 ECATEPEC MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16007 NEZAHUALCOYOTL MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "16008 CHIMALHUACAN MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "16013 LA VILLA CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16014 TLAHUAC CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16017 CUAUTLA MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16018 CUERNAVACA MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16022 VALLE DE CHALCO MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16023 ACATITLA CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16024 TEXCOCO MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "16025 CHALCO MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16029 OCEANIA CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16034 YAUTEPEC MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16040 NEZAHUALCOYOTL ORIENTE MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "16044 JIUTEPEC MORELOS MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16056 LA PASTORA CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16057 CHICOLOAPAN MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "16065 ERMITA CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16067 XOCHIMILCO CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16075 ERMITA SANTA CRUZ CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16082 INSURGENTES SUR CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16083 CENTENARIO CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16095 JOJUTLA MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16103 CUERNAVACA SUR MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16104 ACAPULCO CUAUHTEMOC GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16106 EMILIANO ZAPATA MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16107 VASCO DE QUIROGA CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16110 ACAPULCO CENTRO GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16112 NEZA RAUL ROMERO MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "16113 MARAVILLAS MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "16119 PATIO ACAPULCO GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16121 CHALCO CUAUTZINGO MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16123 CHALCO MIXQUIC MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16124 PUENTE DE IXTLA MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16127 PIE DE LA CUESTA GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16128 AYOTLA MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16129 SAN BERNABE CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16137 PEÑON MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "16142 IGUALA GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16147 CHALCO SOLIDARIDAD MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16151 CASAS ALEMAN CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16156 SAN ANDRES TOTOLTEPEC CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16157 TAXCO GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16161 SANTA CECILIA CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16162 CHICONCUAC MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "16166 LOS REYES LA PAZ MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "16173 TEMIXCO MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16177 AMECAMECA MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16185 IXTAPALUCA MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16202 AXOCHIAPAN MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16205 VALLE DE CHALCO TEZOZOMOC MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16211 ACAPULCO RENACIMIENTO GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16230 TLALPAN ERMITA CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16231 CHILAPA GUERRERO GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16232 CHILPANCINGO SUR GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16233 CHILPANCINGO CENTRO GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16235 PORTAL CENTENARIO CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16248 EMILIANO ZAPATA CENTRO MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16268 PICACHO AJUSCO CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "16271 TECPAN GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16277 ATOYAC GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16283 YECAPIXTLA MOR",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16286 TELOLOAPAN GRO",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Ivan Garcia",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 14 GRO"
  },
  {
    "agency": "16297 SAN ANTONIO TECOMITL CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "16308 LOS REYES ACAQUILPAN MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "17001 NEZAHUALCOYOLT MEX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Armando Reyes",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 5 MEX ORIENTE"
  },
  {
    "agency": "19001 POLANCO CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "19003 INSURGENTES CMX",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Christian Fernandez",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 2 CMX PONIENTE"
  },
  {
    "agency": "CUERNAVACA",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "CUAUTLA",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Josue Rea",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 6 MOR"
  },
  {
    "agency": "LA VIGA",
    "districtManager": "Vanesa Mondragon",
    "regionalManager": "Yael Flores",
    "district": "Dist. 1 Centro–Sur",
    "region": "REG 1 CMX ORIENTE"
  },
  {
    "agency": "16005 TLALNEPANTLA MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16009 NICOLAS ROMERO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16010 ATIZAPAN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16011 CUAUTITLAN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16012 METEPEC MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Israel Gonzalez",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 19 MEX TOLUCA PONIENTE"
  },
  {
    "agency": "16019 COSMOPOL MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16020 TULPETLAC MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16021 VALLEJO CMX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16026 TECAMAC MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16027 ZUMPANGO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16028 NAUCALPAN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16030 TECAMACHALCO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16031 LA CUSPIDE MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16032 IZCALLI MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16033 ZINACANTEPEC MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Jesus Vidals",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 12 MEX TOLUCA CENTRO PONIENTE"
  },
  {
    "agency": "16048 TULA HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16049 TULANCINGO HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16066 MACROPLAZA TECAMAC MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16068 TEOLOYUCAN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16070 TOLUCA CENTRO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Jesus Vidals",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 12 MEX TOLUCA CENTRO PONIENTE"
  },
  {
    "agency": "16072 LOMAS DE CUAUTITLAN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16073 SAN MATEO ATENCO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Israel Gonzalez",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 19 MEX TOLUCA PONIENTE"
  },
  {
    "agency": "16076 RIO DE LOS REMEDIOS MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16081 SANTIAGO TIANGUISTENCO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Jesus Vidals",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 12 MEX TOLUCA CENTRO PONIENTE"
  },
  {
    "agency": "16084 SAN CRISTOBAL ECATEPEC MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16090 OJO DE AGUA MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16091 TENANCINGO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Israel Gonzalez",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 19 MEX TOLUCA PONIENTE"
  },
  {
    "agency": "16094 PLAZA HUEHUETOCA MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16100 ALFREDO DEL MAZO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Jesus Vidals",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 12 MEX TOLUCA CENTRO PONIENTE"
  },
  {
    "agency": "16101 IXTLAHUACA MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Israel Gonzalez",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 19 MEX TOLUCA PONIENTE"
  },
  {
    "agency": "16102 TOLUCA SANTIN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Jesus Vidals",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 12 MEX TOLUCA CENTRO PONIENTE"
  },
  {
    "agency": "16111 XONACATLAN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Jesus Vidals",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 12 MEX TOLUCA CENTRO PONIENTE"
  },
  {
    "agency": "16114 ATLACOMULCO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Israel Gonzalez",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 19 MEX TOLUCA PONIENTE"
  },
  {
    "agency": "16115 TIZAYUCA HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16120 ZUMPANGO TOWN CENTER MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16122 BOULEVARD DE LOS AZTECAS MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16134 VALLE DE BRAVO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Israel Gonzalez",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 19 MEX TOLUCA PONIENTE"
  },
  {
    "agency": "16136 JILOTEPEC MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16140 CIUDAD SAHAGUN HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16141 TEPEXPAN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16153 AZCAPOTZALCO CMX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16154 ATIZAPAN II MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16155 TACUBA CMX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16160 PACHUCA PAROTTI HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16163 PACHUCA HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16165 MELCHOR OCAMPO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16169 VILLA GUERRERO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Jesus Vidals",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 12 MEX TOLUCA CENTRO PONIENTE"
  },
  {
    "agency": "16170 TEMOAYA MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Jesus Vidals",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 12 MEX TOLUCA CENTRO PONIENTE"
  },
  {
    "agency": "16172 LA ESTACION LERMA MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Israel Gonzalez",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 19 MEX TOLUCA PONIENTE"
  },
  {
    "agency": "16175 COATEPEC HARINAS MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Jesus Vidals",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 12 MEX TOLUCA CENTRO PONIENTE"
  },
  {
    "agency": "16182 ACAMBAY MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Israel Gonzalez",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 19 MEX TOLUCA PONIENTE"
  },
  {
    "agency": "16187 PATZCUARO MIC",
    "districtManager": "Juan Rojo",
    "regionalManager": "Juan Arreola",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 25 MIC ORIENTE"
  },
  {
    "agency": "16191 URUAPAN MIC",
    "districtManager": "Juan Rojo",
    "regionalManager": "Juan Arreola",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 25 MIC ORIENTE"
  },
  {
    "agency": "16193 MARAVATIO MIC",
    "districtManager": "Juan Rojo",
    "regionalManager": "Juan Arreola",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 25 MIC ORIENTE"
  },
  {
    "agency": "16196 TARIMBARO MIC",
    "districtManager": "Juan Rojo",
    "regionalManager": "Juan Arreola",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 25 MIC ORIENTE"
  },
  {
    "agency": "16197 ZITACUARO MIC",
    "districtManager": "Juan Rojo",
    "regionalManager": "Juan Arreola",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 25 MIC ORIENTE"
  },
  {
    "agency": "16201 TULTITLAN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16208 SAN PEDRO POCHUTLA OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16209 PROGRESO DE OBREGON HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16214 PINOTEPA NACIONAL OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16215 NOCHIXTLAN OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16217 MATIAS ROMERO OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16220 CIUDAD HIDALGO MIC",
    "districtManager": "Juan Rojo",
    "regionalManager": "Juan Arreola",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 25 MIC ORIENTE"
  },
  {
    "agency": "16223 OAXACA CENTRAL OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16228 TLAXIACO OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16237 HUEJUTLA HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16240 LOMA BONITA OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16246 TULTITLAN ORIENTE MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "16247 IXMIQUILPAN HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16253 PURUANDIRO MIC",
    "districtManager": "Juan Rojo",
    "regionalManager": "Juan Arreola",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 25 MIC ORIENTE"
  },
  {
    "agency": "16254 TEPEJI DEL RIO HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16255 NEXTLALPAN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16256 ZINAPECUARO MIC",
    "districtManager": "Juan Rojo",
    "regionalManager": "Juan Arreola",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 25 MIC ORIENTE"
  },
  {
    "agency": "16257 LAS ARMAS MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16258 MIXQUIAHUALA HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16273 TEZONTEPEC DE ALDAMA HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16278 SATELITE MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16285 HUAJUAPAN OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16289 JUCHITAN OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16291 TEMASCALCINGO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Israel Gonzalez",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 19 MEX TOLUCA PONIENTE"
  },
  {
    "agency": "16292 OTUMBA MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16293 CHICONAUTLA MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Karina Vargas",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 17 MEX NORTE"
  },
  {
    "agency": "16295 TUXTEPEC OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16299 PLAZA TIZARA HID",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "16300 ANDRES JIMENEZ MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Jesus Vidals",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 12 MEX TOLUCA CENTRO PONIENTE"
  },
  {
    "agency": "16304 ZIMATLAN OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16309 OAXACA SANTA ROSA OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16312 PUERTO ESCONDIDO OAX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "16315 ZACUALTIPAN",
    "districtManager": "Juan Rojo",
    "regionalManager": "Alejandro Ojeda",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 18 HID"
  },
  {
    "agency": "SALINA CRUZ",
    "districtManager": "Juan Rojo",
    "regionalManager": "Guadalupe Orozco",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 22 OAX"
  },
  {
    "agency": "19002 ATIZAPAN MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "19005 COACALCO MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Ricardo Zarraga",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 8 MEX NORTE"
  },
  {
    "agency": "19006 SATELITE MEX",
    "districtManager": "Juan Rojo",
    "regionalManager": "Humberto Trejo",
    "district": "Dist. 2 Centro–Norte",
    "region": "REG 3 MEX NORTE"
  },
  {
    "agency": "16059 TEPATITLAN JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16060 ZAPOTLANEJO JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16062 ARANDAS JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16063 INDEPENDENCIA JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16064 FEDERALISMO JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16069 SAN JUAN DE LOS LAGOS JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16074 LAS AGUILAS JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16077 TLAJOMULCO JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16078 EL SALTO JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16080 TLAQUEPAQUE JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16086 IRAPUATO GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Alvarez",
    "district": "Dist. 3 Bajío",
    "region": "REG 13 GUA NORTE"
  },
  {
    "agency": "16087 MOROLEON GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16089 TORRES LANDA GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Alvarez",
    "district": "Dist. 3 Bajío",
    "region": "REG 13 GUA NORTE"
  },
  {
    "agency": "16092 LOPEZ MATEOS NORTE JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16093 SAN JUAN DEL RIO QUE",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "16096 ATOTONILCO JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16097 CIUDAD GUZMAN JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16098 CHAPALA JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16099 CELAYA CENTRO GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16108 QUERETARO QUE",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "16109 ABASOLO GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16116 SALVATIERRA GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16117 APASEO EL GRANDE GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "16118 ALAIA GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Alvarez",
    "district": "Dist. 3 Bajío",
    "region": "REG 13 GUA NORTE"
  },
  {
    "agency": "16125 PENJAMO GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16126 SAN MIGUEL DE ALLENDE GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "16148 SILAO GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Alvarez",
    "district": "Dist. 3 Bajío",
    "region": "REG 13 GUA NORTE"
  },
  {
    "agency": "16149 APASEO EL ALTO GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "16150 VALLE DE SANTIAGO GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16152 ACAMBARO GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16158 SAN LUIS DE LA PAZ GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Alvarez",
    "district": "Dist. 3 Bajío",
    "region": "REG 13 GUA NORTE"
  },
  {
    "agency": "16159 ARAUCARIAS GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16164 AGUASCALIENTES AGS",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 26",
    "district": "Dist. 3 Bajío",
    "region": "REG 26 AGS - ZAC"
  },
  {
    "agency": "16167 SALAMANCA GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16168 CORTAZAR GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16171 AGUASCALIENTES SUR AGS",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 26",
    "district": "Dist. 3 Bajío",
    "region": "REG 26 AGS - ZAC"
  },
  {
    "agency": "16176 PLAZA SHARASU AGS",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 26",
    "district": "Dist. 3 Bajío",
    "region": "REG 26 AGS - ZAC"
  },
  {
    "agency": "16179 EZEQUIEL MONTES QUE",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "16180 CARRILLO PUERTO QUE",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "16181 TEQUISQUIAPAN QUE",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "16188 PASEO PONIENTE MIC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 20",
    "district": "Dist. 3 Bajío",
    "region": "REG 20 MIC PONIENTE"
  },
  {
    "agency": "16189 SAN JOSE ITURBIDE GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "16194 MANUEL DOBLADO GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Alvarez",
    "district": "Dist. 3 Bajío",
    "region": "REG 13 GUA NORTE"
  },
  {
    "agency": "16203 LA PIEDAD MIC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 20",
    "district": "Dist. 3 Bajío",
    "region": "REG 20 MIC PONIENTE"
  },
  {
    "agency": "16204 ZAMORA MIC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 20",
    "district": "Dist. 3 Bajío",
    "region": "REG 20 MIC PONIENTE"
  },
  {
    "agency": "16206 FUENTE SAN GASPAR JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16213 TECOMAN COL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16216 SAHUAYO MIC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 20",
    "district": "Dist. 3 Bajío",
    "region": "REG 20 MIC PONIENTE"
  },
  {
    "agency": "16219 LEON ECHEVESTE GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Alvarez",
    "district": "Dist. 3 Bajío",
    "region": "REG 13 GUA NORTE"
  },
  {
    "agency": "16221 SAN FRANCISCO DEL RINCON GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Alvarez",
    "district": "Dist. 3 Bajío",
    "region": "REG 13 GUA NORTE"
  },
  {
    "agency": "16222 AMECA JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16224 ZACAPU MIC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 20",
    "district": "Dist. 3 Bajío",
    "region": "REG 20 MIC PONIENTE"
  },
  {
    "agency": "16226 MANZANILLO COL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16227 ARCOS DE ZAPOPAN JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16234 GUADALUPE ZACATECAS ZAC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 26",
    "district": "Dist. 3 Bajío",
    "region": "REG 26 AGS - ZAC"
  },
  {
    "agency": "16236 FRESNILLO ZAC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 26",
    "district": "Dist. 3 Bajío",
    "region": "REG 26 AGS - ZAC"
  },
  {
    "agency": "16238 VILLAGRAN GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Jhonatan Zarate",
    "district": "Dist. 3 Bajío",
    "region": "REG 15 GUA SUR"
  },
  {
    "agency": "16239 SAN FELIPE GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Alvarez",
    "district": "Dist. 3 Bajío",
    "region": "REG 13 GUA NORTE"
  },
  {
    "agency": "16242 LOS REYES MICHOACAN MIC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 20",
    "district": "Dist. 3 Bajío",
    "region": "REG 20 MIC PONIENTE"
  },
  {
    "agency": "16250 LA BARCA JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Diego Rea",
    "district": "Dist. 3 Bajío",
    "region": "REG 9 JAL CENTRO SUR"
  },
  {
    "agency": "16252 TACAMBARO MIC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 20",
    "district": "Dist. 3 Bajío",
    "region": "REG 20 MIC PONIENTE"
  },
  {
    "agency": "16261 COMPOSTELA NAY",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16264 JESUS MARIA AGS",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 26",
    "district": "Dist. 3 Bajío",
    "region": "REG 26 AGS - ZAC"
  },
  {
    "agency": "16266 VALLARTA FRANCISCO VILLA JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16267 LAZARO CARDENAS MIC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 20",
    "district": "Dist. 3 Bajío",
    "region": "REG 20 MIC PONIENTE"
  },
  {
    "agency": "16269 HACIENDAS AGS",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 26",
    "district": "Dist. 3 Bajío",
    "region": "REG 26 AGS - ZAC"
  },
  {
    "agency": "16272 SAN SEBASTIAN TLAJOMULCO JAL",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Edgar Mancinas",
    "district": "Dist. 3 Bajío",
    "region": "REG 11 JAL CENTRO NORTE"
  },
  {
    "agency": "16274 MORELIA MIC",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Zona 20",
    "district": "Dist. 3 Bajío",
    "region": "REG 20 MIC PONIENTE"
  },
  {
    "agency": "16284 PEDRO ESCOBEDO QUE",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "16314 PORTAL QUERETARO QUE",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Garcia",
    "district": "Dist. 3 Bajío",
    "region": "REG 27 QUE"
  },
  {
    "agency": "19004 PLAZA MAYOR GTO",
    "districtManager": "Aldo Tapia",
    "regionalManager": "Rafael Alvarez",
    "district": "Dist. 3 Bajío",
    "region": "REG 13 GUA NORTE"
  },
  {
    "agency": "16015 TIERRA BLANCA VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jorge Contreras",
    "district": "Dist. 4 Golfo",
    "region": "REG 4 VER SUR"
  },
  {
    "agency": "16016 VERACRUZ VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Zona 29",
    "district": "Dist. 4 Golfo",
    "region": "REG 29 VER CENTRO"
  },
  {
    "agency": "16035 PUEBLA SUR PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16036 XALAPA VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Zona 29",
    "district": "Dist. 4 Golfo",
    "region": "REG 29 VER CENTRO"
  },
  {
    "agency": "16037 ORIZABA VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Zona 29",
    "district": "Dist. 4 Golfo",
    "region": "REG 29 VER CENTRO"
  },
  {
    "agency": "16038 CORDOBA VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Zona 29",
    "district": "Dist. 4 Golfo",
    "region": "REG 29 VER CENTRO"
  },
  {
    "agency": "16039 LOS VOLCANES PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16041 SAN ANDRES TUXTLA VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jorge Contreras",
    "district": "Dist. 4 Golfo",
    "region": "REG 4 VER SUR"
  },
  {
    "agency": "16042 COATZACOALCOS VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jorge Contreras",
    "district": "Dist. 4 Golfo",
    "region": "REG 4 VER SUR"
  },
  {
    "agency": "16043 MINATITLAN VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jorge Contreras",
    "district": "Dist. 4 Golfo",
    "region": "REG 4 VER SUR"
  },
  {
    "agency": "16045 MARTINEZ DE LA TORRE VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16046 POZA RICA VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16047 TUXPAN VERACRUZ VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16050 VERACRUZ TEJERIA VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Zona 29",
    "district": "Dist. 4 Golfo",
    "region": "REG 29 VER CENTRO"
  },
  {
    "agency": "16051 VILLAHERMOSA TAB",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Felipe Lopez",
    "district": "Dist. 4 Golfo",
    "region": "REG 7 TAB"
  },
  {
    "agency": "16052 CARDENAS TAB",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Felipe Lopez",
    "district": "Dist. 4 Golfo",
    "region": "REG 7 TAB"
  },
  {
    "agency": "16053 ACAYUCAN VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jorge Contreras",
    "district": "Dist. 4 Golfo",
    "region": "REG 4 VER SUR"
  },
  {
    "agency": "16054 COMALCALCO TAB",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Felipe Lopez",
    "district": "Dist. 4 Golfo",
    "region": "REG 7 TAB"
  },
  {
    "agency": "16055 CUNDUACAN TAB",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Felipe Lopez",
    "district": "Dist. 4 Golfo",
    "region": "REG 7 TAB"
  },
  {
    "agency": "16058 PAPANTLA VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16061 BOCA DEL RIO VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Zona 29",
    "district": "Dist. 4 Golfo",
    "region": "REG 29 VER CENTRO"
  },
  {
    "agency": "16071 ALAMO VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16079 TEAPA TAB",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Felipe Lopez",
    "district": "Dist. 4 Golfo",
    "region": "REG 7 TAB"
  },
  {
    "agency": "16085 HUIMANGUILLO TAB",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Felipe Lopez",
    "district": "Dist. 4 Golfo",
    "region": "REG 7 TAB"
  },
  {
    "agency": "16088 PUEBLA CAPU PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16105 ATLIXCO PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16130 LAS MARGARITAS PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16131 TEHUACAN PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16132 PARAISO TAB",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Felipe Lopez",
    "district": "Dist. 4 Golfo",
    "region": "REG 7 TAB"
  },
  {
    "agency": "16133 TANTOYUCA VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16135 FRONTERA TAB",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Felipe Lopez",
    "district": "Dist. 4 Golfo",
    "region": "REG 7 TAB"
  },
  {
    "agency": "16138 PLAZA LOS CORALES VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Zona 29",
    "district": "Dist. 4 Golfo",
    "region": "REG 29 VER CENTRO"
  },
  {
    "agency": "16139 TAMULTE TAB",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Felipe Lopez",
    "district": "Dist. 4 Golfo",
    "region": "REG 7 TAB"
  },
  {
    "agency": "16143 TLAXCALA TLA",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16144 NARANJOS VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16145 PLAZA CASTILLOTLA PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16146 CHIAUTEMPAN TLA",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16174 CHOLULA PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16178 COMITAN CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16183 PIJIJIAPAN CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16184 ARRIAGA CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16186 PUEBLA TECAMACHALCO PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16190 HUIXTLA CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16192 MOTOZINTLA CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16195 ZACATELCO TLA",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16198 IZUCAR DE MATAMOROS PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16199 MAPASTEPEC CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16200 FRONTERA COMALAPA CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16207 CIUDAD DE LIBRES PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16210 SAN FRANCISCO TOTIMEHUACAN PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16212 TEPEACA PUEBLA PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16218 HUAMANTLA TLA",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16225 APIZACO TLA",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16229 TUXTLA GUTIERREZ CENTRO CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16241 TEZIUTLAN PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16243 CHAMPOTON CAM",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "16244 CAMPECHE CENTRO CAM",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "16245 ACATLAN DE OSORIO PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16249 TLAPACOYAN VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16251 COSCOMATEPEC VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jorge Contreras",
    "district": "Dist. 4 Golfo",
    "region": "REG 4 VER SUR"
  },
  {
    "agency": "16259 ALTAMIRA TAM",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16260 EBANO SLP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16262 TAMPICO TAM",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16263 AEROPUERTO TAMPICO TAM",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16265 PANUCO VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16270 ZACATLAN PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16275 CHETUMAL ROO",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "16276 CIUDAD MANTE TAM",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16279 PLAYA DEL CARMEN ROO",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "16280 PEROTE VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Zona 29",
    "district": "Dist. 4 Golfo",
    "region": "REG 29 VER CENTRO"
  },
  {
    "agency": "16281 CHIAPA DE CORZO CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16282 SAN CRISTOBAL DE LAS CASAS CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16287 TAPACHULA CENTRO CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16288 MOTUL YUC",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "16290 ACATZINGO PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Adolfo Barrientos",
    "district": "Dist. 4 Golfo",
    "region": "REG 24 PUE - TLA"
  },
  {
    "agency": "16294 CIUDAD MADERO TAM",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jose Dorantes",
    "district": "Dist. 4 Golfo",
    "region": "REG 10 VER NORTE"
  },
  {
    "agency": "16296 GALERIAS TAPACHULA CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16298 AGUA DULCE VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jorge Contreras",
    "district": "Dist. 4 Golfo",
    "region": "REG 4 VER SUR"
  },
  {
    "agency": "16301 CARDEL VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Zona 29",
    "district": "Dist. 4 Golfo",
    "region": "REG 29 VER CENTRO"
  },
  {
    "agency": "16302 HUAUCHINANGO PUE",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Gerardo Olivares",
    "district": "Dist. 4 Golfo",
    "region": "REG 16 PUE"
  },
  {
    "agency": "16303 COATEPEC VER",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Zona 29",
    "district": "Dist. 4 Golfo",
    "region": "REG 29 VER CENTRO"
  },
  {
    "agency": "16305 PALENQUE CHP",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "16306 KANASIN YUC",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "16307 MONTEJO YUC",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "16310 PATRICIO TRUEBA CAM",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "16313 TULUM ROO",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "16316 COATZINTLA",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jorge Contreras",
    "district": "Dist. 4 Golfo",
    "region": "REG 4 VER SUR"
  },
  {
    "agency": "LAS CHOAPAS",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Jorge Contreras",
    "district": "Dist. 4 Golfo",
    "region": "REG 4 VER SUR"
  },
  {
    "agency": "TEKAX",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "YAJALON",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "CIUDAD HIDALGO",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "CANDELARIA",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "VENUSTIANO CARRANZA",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "REFORMA",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Antonio Lara",
    "district": "Dist. 4 Golfo",
    "region": "REG 21 CHP"
  },
  {
    "agency": "CD DEL CARMEN",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "OXKUTZCAB",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  },
  {
    "agency": "PETO",
    "districtManager": "Omar Madrigal",
    "regionalManager": "Pedro Fajardo",
    "district": "Dist. 4 Golfo",
    "region": "REG 28 PENÍNSULA"
  }
];

export const REGIONS = Array.from(
  new Map(CATALOG.filter(r => r.region).map(r => [r.region, r])).values()
).sort((a, b) => a.region.localeCompare(b.region, 'es', { numeric: true }));
