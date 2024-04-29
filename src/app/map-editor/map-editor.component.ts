import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { area } from '@turf/turf';
import StylesControl from '@mapbox-controls/styles';
import '@mapbox-controls/styles/src/index.css';
import { ACCESS_TOKEN } from '../shared/constants/api.constants';
import { ExtrudeButtonControl } from './control';

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
  draw: any;

  updateArea(e: mapboxgl.MapboxEvent) {
    console.log(e);

    // const data = this.draw.getAll();
    // const answer: HTMLElement | null = document.getElementById('calculated-area');
    // if (data.features.length > 0) {
    //   const areaData: any = area(data);
    //   console.log(areaData);
    //   const rounded_area = Math.round(areaData * 100) / 100;
    //   if (answer) {
    //     answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
    //   }
    // } else {
    //   if (answer) {
    //     answer.innerHTML = '';
    //     if (e.type !== 'draw.delete')
    //       alert('Click the map to draw a polygon.');
    //   }
    // }
  }

  zoom(e: mapboxgl.MapboxEvent) {
    console.log(e.constructor.name);
    (e.originalEvent as any)?.stopPropagation();
    (e.originalEvent as any)?.stopPropagation();
    console.log(e);

    return false
  }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: ACCESS_TOKEN,
      container: 'map',
      style: this.style,
      center: [23.7417, 37.9569],
      zoom: 15.99,
      pitch: 40,
      bearing: 20,
      antialias: true,
      // center: [this.lng, this.lat],

    });

    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });

    console.log(this.draw);


    this.map.addControl(this.draw, 'top-left')
    this.map.on('draw.create', this.updateArea);
    this.map.on('draw.delete', this.updateArea);
    this.map.on('draw.update', this.updateArea);
    this.map.on('wheel', this.zoom);
    this.map.on('zoomstart', this.zoom);
    this.map.on('zoom', this.zoom);
    this.map.on('zoomend', this.zoom);

    this.map.addControl(new StylesControl({ compact: true }), 'top-right');
    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    this.map.addControl(new ExtrudeButtonControl(() => console.log(this), () => console.log(this)), 'top-left')
  }

}


