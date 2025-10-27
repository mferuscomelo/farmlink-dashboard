import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faChartPieSimple,
  faFence,
  faHouse,
  faMapLocationDot,
  faMobileSignalOut,
} from '@fortawesome/pro-regular-svg-icons';
import { RouterModule } from '@angular/router';

interface Link {
  icon: IconDefinition;
  name: string;
  url: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  links: Link[] = [
    { icon: faHouse, name: 'Dashboard', url: '' },
    { icon: faMapLocationDot, name: 'Map View', url: 'map' },
    { icon: faMobileSignalOut, name: 'Devices', url: 'devices' },
    { icon: faBell, name: 'Alerts', url: 'alerts' },
    { icon: faChartPieSimple, name: 'Reports', url: 'reports' },
    { icon: faFence, name: 'Geofencing', url: 'geofencing' },
  ];
}
