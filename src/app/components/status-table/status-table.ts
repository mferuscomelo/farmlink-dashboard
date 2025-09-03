import { Component, Input } from '@angular/core';
import { AnimalStatus } from '../../models/animal-status';
import { faSlidersSimple } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RelativeTimePipe } from '../../pipes/relative-time-pipe';

@Component({
  selector: 'app-status-table',
  imports: [FontAwesomeModule, RelativeTimePipe],
  templateUrl: './status-table.html',
  styleUrl: './status-table.css',
})
export class StatusTable {
  @Input({ required: true }) animals: AnimalStatus[] = [];

  faSlidersSimple = faSlidersSimple;

  healthOptions: Array<{
    value: AnimalStatus['health'];
    label: string;
    colorClass: string;
  }> = [
    {
      value: 'good',
      label: 'Healthy',
      colorClass: 'border-green-600 bg-green-600',
    },
    {
      value: 'warning',
      label: 'Warning',
      colorClass: 'border-yellow-600 bg-yellow-600',
    },
    {
      value: 'critical',
      label: 'Critical',
      colorClass: 'border-red-600 bg-red-600',
    },
  ];

  selectedHealthFilter: AnimalStatus['health'] | 'all' = 'all';

  onHealthFilterChange(value: string): void {
    this.selectedHealthFilter = value as AnimalStatus['health'] | 'all';
  }
}
