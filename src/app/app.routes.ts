import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
    pathMatch: 'full',
  },
  {
    path: 'map',
    loadComponent: () => import('./pages/map/map').then((m) => m.Map),
  },
  {
    path: 'devices',
    loadComponent: () =>
      import('./pages/devices/devices').then((m) => m.Devices),
  },
  {
    path: 'alerts',
    loadComponent: () => import('./pages/alerts/alerts').then((m) => m.Alerts),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports/reports').then((m) => m.Reports),
  },
  {
    path: 'geofencing',
    loadComponent: () =>
      import('./pages/geofencing/geofencing').then((m) => m.Geofencing),
  },
];
