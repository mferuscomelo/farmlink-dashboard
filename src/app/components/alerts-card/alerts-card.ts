import { Component, Input } from '@angular/core';
import { Alert } from '../../models/alert';
import { Alert as AlertCard } from '../alert/alert';

@Component({
  selector: 'app-alerts-card',
  imports: [AlertCard],
  templateUrl: './alerts-card.html',
  styleUrl: './alerts-card.css',
})
export class AlertsCard {
  @Input({ required: true }) alerts: Alert[] = [];
}
