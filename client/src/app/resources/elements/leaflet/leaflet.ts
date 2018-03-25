import {Utilities} from 'mean-au-ts-shared'
import * as L from 'leaflet';
import { customElement } from 'aurelia-framework';

@customElement('leaflet')
export class Leaflet {
  id: string = Utilities.newGuid()
  map: L.Map;
  center:[number, number] = [32.747041, -117.140229]

  private restaurantMarker = (<any>L).AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'cutlery',
    markerColor: 'blue'
  });

  private hubMarker = (<any>L).AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'leaf',
    markerColor: 'darkpurple'
  });

  private residentialMarker = (<any>L).AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'home',
    markerColor: 'green'
  });

  private collectionMarker = (<any>L).AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'shopping-basket',
    markerColor: 'red'
  });

  attached() {
    this.map = L.map(this.id).setView(this.center, 11);
    L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      id: 'osm.test'
    }).addTo(this.map);

    this.randomSeed()
  }

  randomSeed() {
    for (let i = 0; i < 100; i++) {
      let markerType = Math.floor(Math.random() * 8)
      let loc: [number, number] = [this.center[0] + (((Math.random() * 12) - 6) * 0.01), this.center[1] + (((Math.random() * 12) - 6) * 0.01)]
      switch (markerType) {
        case 0:
        case 1:
        case 2:
        case 3:
          L.marker(loc, {icon: this.residentialMarker}).addTo(this.map);
          break;
        case 4:
        case 5:
          L.marker(loc, {icon: this.restaurantMarker}).addTo(this.map);
          break;
        case 6:
          L.marker(loc, {icon: this.hubMarker}).addTo(this.map);
          break;
        case 7:
          L.marker(loc, {icon: this.collectionMarker}).addTo(this.map);
          break;
      }
    }
  }
}
