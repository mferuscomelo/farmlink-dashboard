import { Component } from '@angular/core';
import { AlertsCard } from '../../components/alerts-card/alerts-card';
import { LiveMap } from '../../components/live-map/live-map';
import { Statistics } from '../../components/statistics/statistics';
import { StatusTable } from '../../components/status-table/status-table';
import { Statistic } from '../../models/statistic';
import { AnimalStatus } from '../../models/animal-status';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-dashboard',
  imports: [Statistics, LiveMap, AlertsCard, StatusTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  host: {
    class: 'px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-4',
  },
})
export class Dashboard {
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
      location: { latitude: 46.5197, longitude: 9.8062 },
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
      location: { latitude: 46.5203, longitude: 9.8058 },
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
      location: { latitude: 46.5185, longitude: 9.8075 },
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
      location: { latitude: 46.5211, longitude: 9.8043 },
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
      location: { latitude: 46.5189, longitude: 9.8081 },
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
      location: { latitude: 46.5178, longitude: 9.8054 },
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
      location: { latitude: 46.5206, longitude: 9.8069 },
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
      location: { latitude: 46.5194, longitude: 9.8047 },
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
      location: { latitude: 46.5201, longitude: 9.8064 },
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
      location: { latitude: 46.5182, longitude: 9.8071 },
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
