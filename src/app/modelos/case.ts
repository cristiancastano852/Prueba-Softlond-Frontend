export class Case {
  id: string = '';
  title: string = '';
  description: string = '';
  ticket: string = '';
  status: CaseStatus = CaseStatus.PENDIENTE;
  type: CaseType = CaseType.FELICITACIONES;
  authorId: string = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  assignees: Assignee[] = [];
}

export enum CaseStatus {
  PENDIENTE = 'PENDIENTE',
  FINALIZADO = 'FINALIZADO',
}

export enum CaseType {
  FELICITACIONES = 'FELICITACIONES',
  RECLAMOS = 'RECLAMOS',
  QUEJAS = 'QUEJAS',
  SOLICITUDES = 'SOLICITUDES',
}

export interface Assignee {}

export enum UserRole {
  CLIENTE = 'CLIENTE',
  ASESOR = 'ASESOR',
}
