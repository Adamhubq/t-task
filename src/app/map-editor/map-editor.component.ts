import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { area } from '@turf/turf';
import StylesControl from '@mapbox-controls/styles';
import '@mapbox-controls/styles/src/index.css';
import { ACCESS_TOKEN } from '../shared/constants/api.constants';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrl: './map-editor.component.scss'
})
export class MapEditorComponent {

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat: number = 30.2672;
  lng: number = -97.7431;

  ngOnInit() {
    function updateArea(e: any) {
      const data = draw.getAll();
      const answer: HTMLElement | null = document.getElementById('calculated-area');
      if (data.features.length > 0) {
        const areaData: any = area(data);
        const rounded_area = Math.round(areaData * 100) / 100;
        if (answer) {
          answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
        }
      } else {
        if (answer) {
          answer.innerHTML = '';
          if (e.type !== 'draw.delete')
            alert('Click the map to draw a polygon.');
        }
      }
    }

    this.map = new mapboxgl.Map({
      accessToken: ACCESS_TOKEN,
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });
    this.map.addControl(draw, 'top-left')
    this.map.on('draw.create', updateArea);
    this.map.on('draw.delete', updateArea);
    this.map.on('draw.update', updateArea);

    this.map.addControl(new StylesControl({ compact: true }), 'top-right');
    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');

  }
}
