import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/pro-regular-svg-icons';
import { Statistic } from '../../models/statistic';

@Component({
  selector: 'app-statistics',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics {
  @Input({ required: true }) statistics: Statistic[] = [];

  Math = Math;

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
}
