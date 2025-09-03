export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface Alert {
  id: string;
  animalId: string;
  type: AlertType;
  title: string;
  message: string;
  timestamp: string;
}
