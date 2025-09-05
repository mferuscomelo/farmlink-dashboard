import { Component, Input, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightAndArrowDownLeftFromCenter } from '@fortawesome/pro-regular-svg-icons';
import { AnimalStatus } from '../../models/animal-status';
import * as L from 'leaflet';

@Component({
  selector: 'app-live-map',
  imports: [FontAwesomeModule],
  templateUrl: './live-map.html',
  styleUrl: './live-map.css',
})
export class LiveMap {
  @Input({ required: true }) animals: AnimalStatus[] = [];

  faExpand = faArrowUpRightAndArrowDownLeftFromCenter;

  private map!: L.Map;

  get healthyCount(): number {
    return this.animals.filter((animal) => animal.health === 'good').length;
  }

  get warningCount(): number {
    return this.animals.filter((animal) => animal.health === 'warning').length;
  }

  get criticalCount(): number {
    return this.animals.filter((animal) => animal.health === 'critical').length;
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.placeMarkers();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [46.5197, 9.8062],
      zoom: 17,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  private placeMarkers(): void {
    this.animals.forEach((animal) => {
      const marker = L.marker([
        animal.location.latitude,
        animal.location.longitude,
      ]);
      marker.addTo(this.map).bindPopup(`
        <b>${animal.name}</b><br>
        Health: ${animal.health}<br>
        Battery: ${animal.batteryLevel}%<br>
        Last Updated: ${animal.lastUpdated.toLocaleString()}
      `);
    });
  }
}
