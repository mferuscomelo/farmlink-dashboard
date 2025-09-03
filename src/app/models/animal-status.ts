import { Location } from './location';

export interface AnimalStatus {
  id: string;
  name: string;
  location: Location;
  health: 'good' | 'warning' | 'critical';
  batteryLevel: number; // percentage
  lastUpdated: Date;
}
