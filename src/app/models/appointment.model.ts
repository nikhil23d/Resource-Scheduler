import { Resource } from './resource.model';

export interface Appointment {
  id: number;
  title: string;
  start: Date;
  end: Date;
  resourceId: number;
  type: 'appointment' | 'unavailable';
  resource?: Resource;
}