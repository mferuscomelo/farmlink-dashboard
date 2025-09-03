import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Statistic } from './models/statistic';
import { Statistics } from './components/statistics/statistics';
import { LiveMap } from './components/live-map/live-map';
import { AnimalStatus } from './models/animal-status';
import { AlertsCard } from './components/alerts-card/alerts-card';
import { Alert } from './models/alert';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Statistics, LiveMap, AlertsCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  statistics: Statistic[] = [
    {
      description: 'Total Animals',
      value: 247,
      change: 2.1,
    },
    {
      description: 'Active Tracking',
      value: 120,
      change: 12.3,
      units: '%',
    },
    {
      description: 'Active Alerts',
      value: 3,
    },
    {
      description: 'Avg. Movement',
      value: 2.4,
      change: 4.7,
      units: 'km',
    },
  ];

  animals: AnimalStatus[] = [
    {
      id: '1',
      name: 'Bessie',
      location: { latitude: 37.7749, longitude: -122.4194 },
      health: 'good',
      batteryLevel: 85,
      lastUpdated: new Date(),
    },
    {
      id: '2',
      name: 'MooMoo',
      location: { latitude: 34.0522, longitude: -118.2437 },
      health: 'warning',
      batteryLevel: 45,
      lastUpdated: new Date(),
    },
    {
      id: '3',
      name: 'Daisy',
      location: { latitude: 40.7128, longitude: -74.006 },
      health: 'critical',
      batteryLevel: 15,
      lastUpdated: new Date(),
    },
  ];

  alerts: Alert[] = [
    {
      id: 'a1',
      animalId: '2',
      type: 'warning',
      title: 'Lameness Detected',
      message: 'MooMoo shows signs of lameness.',
      timestamp: '2 hours ago',
    },
    {
      id: 'a2',
      animalId: '3',
      type: 'error',
      title: 'Low Battery',
      message: 'Daisy battery critically low (15%).',
      timestamp: '4 hours ago',
    },
    {
      id: 'a3',
      animalId: '3',
      type: 'info',
      title: 'No Movement Detected',
      message: 'Daisy has not moved in the last 24 hours.',
      timestamp: '1 day ago',
    },
  ];
}
