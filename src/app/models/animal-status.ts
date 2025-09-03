import { Location } from './location';

export interface AnimalStatus {
  id: string;
  name: string;
  location: Location;
  health: 'good' | 'warning' | 'critical';
  batteryLevel: number; // percentage
  activity: 'grazing' | 'moving' | 'resting';
  distance: number; // kilometers
  temperature: number; // Celsius
  lastUpdated: Date;
}
