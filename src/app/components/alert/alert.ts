import { Component, computed, input } from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import {
  faClock,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faTimesCircle,
} from '@fortawesome/pro-regular-svg-icons';
import { AlertType } from '../../models/alert';

@Component({
  selector: 'app-alert',
  imports: [FontAwesomeModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  type = input<AlertType>('info');
  title = input.required<string>();
  message = input.required<string>();
  date = input.required<string>();

  faClock = faClock;

  icons = {
    success: faCheckCircle,
    info: faInfoCircle,
    warning: faExclamationTriangle,
    error: faTimesCircle,
  } as const;

  alertIcon = computed<IconDefinition>(() => this.icons[this.type()]);
}
