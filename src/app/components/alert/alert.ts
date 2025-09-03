import { Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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

  alertIcon = computed(() => {
    const icons = {
      success: faCheckCircle,
      info: faInfoCircle,
      warning: faExclamationTriangle,
      error: faTimesCircle,
    };
    return icons[this.type()];
  });

  iconColor = computed(() => {
    const typeClasses = {
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
    };
    return typeClasses[this.type()];
  });

  badgeColor = computed(() => {
    const typeClasses = {
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
    };
    return typeClasses[this.type()];
  });
}
