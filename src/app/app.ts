import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Statistic } from './models/statistic';
import { Statistics } from './components/statistics/statistics';
import { LiveMap } from './components/live-map/live-map';
import { AnimalStatus } from './models/animal-status';
import { AlertsCard } from './components/alerts-card/alerts-card';
import { Alert } from './models/alert';
import { StatusTable } from './components/status-table/status-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Statistics, LiveMap, AlertsCard, StatusTable],
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
      lastUpdated: new Date(Date.now() - Math.random() * 2 * 60 * 1000),
      distance: 2.3,
      temperature: 38.9,
      activity: 'grazing',
    },
    {
      id: '2',
      name: 'MooMoo',
      location: { latitude: 34.0522, longitude: -118.2437 },
      health: 'warning',
      batteryLevel: 45,
      lastUpdated: new Date(Date.now() - Math.random() * 2 * 60 * 1000),
      distance: 1.8,
      temperature: 39.5,
      activity: 'resting',
    },
    {
      id: '3',
      name: 'Daisy',
      location: { latitude: 40.7128, longitude: -74.006 },
      health: 'critical',
      batteryLevel: 15,
      lastUpdated: new Date(Date.now() - Math.random() * 2 * 60 * 1000),
      distance: 0.2,
      temperature: 40.1,
      activity: 'resting',
    },
    {
      id: '4',
      name: 'Bella',
      location: { latitude: 41.8781, longitude: -87.6298 },
      health: 'good',
      batteryLevel: 92,
      lastUpdated: new Date(Date.now() - Math.random() * 2 * 60 * 1000),
      distance: 3.1,
      temperature: 38.7,
      activity: 'moving',
    },
    {
      id: '5',
      name: 'Luna',
      location: { latitude: 29.7604, longitude: -95.3698 },
      health: 'good',
      batteryLevel: 68,
      lastUpdated: new Date(Date.now() - Math.random() * 2 * 60 * 1000),
      distance: 2.7,
      temperature: 38.8,
      activity: 'grazing',
    },
    {
      id: '6',
      name: 'Rosie',
      location: { latitude: 33.4484, longitude: -112.074 },
      health: 'warning',
      batteryLevel: 23,
      lastUpdated: new Date(Date.now() - Math.random() * 2 * 60 * 1000),
      distance: 1.5,
      temperature: 39.3,
      activity: 'grazing',
    },
    {
      id: '7',
      name: 'Clover',
      location: { latitude: 39.7392, longitude: -104.9903 },
      health: 'good',
      batteryLevel: 78,
      lastUpdated: new Date(Date.now() - Math.random() * 2 * 60 * 1000),
      distance: 2.9,
      temperature: 38.6,
      activity: 'moving',
    },
    {
      id: '8',
      name: 'Maple',
      location: { latitude: 47.6062, longitude: -122.3321 },
      health: 'critical',
      batteryLevel: 8,
      lastUpdated: new Date(Date.now() - Math.random() * 2 * 60 * 1000),
      distance: 0.4,
      temperature: 40.3,
      activity: 'resting',
    },
    {
      id: '9',
      name: 'Buttercup',
      location: { latitude: 25.7617, longitude: -80.1918 },
      health: 'good',
      batteryLevel: 91,
      lastUpdated: new Date(Date.now() - Math.random() * 2 * 60 * 1000),
      distance: 2.5,
      temperature: 38.9,
      activity: 'grazing',
    },
    {
      id: '10',
      name: 'Patches',
      location: { latitude: 42.3601, longitude: -71.0589 },
      health: 'warning',
      batteryLevel: 34,
      lastUpdated: new Date(Date.now() - Math.random() * 2 * 60 * 1000),
      distance: 1.2,
      temperature: 39.2,
      activity: 'resting',
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
