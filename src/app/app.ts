import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Statistic } from './models/statistic';
import { Statistics } from './components/statistics/statistics';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Statistics, LiveMap],
  templateUrl: './app.html',
  styleUrl: './app.css'
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
}
