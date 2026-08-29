import type { ChecklistRole } from './data';
import type { BrandId } from './brands';

export type ComplianceStatus = 'pending' | 'complies' | 'not_complies' | 'na';
export type EvidenceKind = 'image' | 'file' | 'link';

export interface Evidence {
  id: string;
  kind: EvidenceKind;
  name: string;
  mimeType?: string;
  size?: number;
  dataUrl?: string;
  url?: string;
}

export interface ItemState {
  status: ComplianceStatus;
  comment: string;
  evidences: Array<Evidence | null>;
}

export interface ReportMetadata {
  brand: BrandId;
  role: ChecklistRole;
  reporterName: string;
  reportDate: string;
  agency: string;
  region: string;
  regionalManager: string;
  district: string;
  districtManager: string;
}

export interface SavedReport {
  id: string;
  createdAt: string;
  updatedAt: string;
  metadata: ReportMetadata;
  itemStates: Record<string, ItemState>;
}
