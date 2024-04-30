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

  private readonly DEFAULT_HEIGHT_EXTRUDE: number = 5;

  style: string = 'mapbox://styles/mapbox/streets-v11';
  map: mapboxgl.Map | undefined;
  lat: number = 30.2672;
  lng: number = -97.7431;
  draw!: MapboxDraw;

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: ACCESS_TOKEN,
      container: 'map',
      style: this.style,
      zoom: 17,
      center: [this.lng, this.lat],
      pitch: 40,
      antialias: true,
    });

    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });

    this.map.addControl(this.draw, 'top-left')
    this.map.on('draw.create', this.updateArea.bind(this));
    this.map.on('draw.update', this.updateArea.bind(this));

    this.map.addControl(new StylesControl({ compact: true }), 'top-right');
    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    this.map.addControl(
      new ExtrudeButtonControl(
        () => this._changeExtrude('increment'),
        () => this._changeExtrude('decrement')), 'top-left')
  }

  public updateArea() {
    setTimeout(() => {
      this._changeExtrude('refresh');
    }, 0);
  }

  private _changeExtrude(operation: 'increment' | 'decrement' | 'refresh') {
    const selectedPolygon = this.draw.getSelected().features[0]?.id as string;
    if(!selectedPolygon) return
    const extrude = this.map?.getLayer(`${selectedPolygon}_extrude`);

    if (extrude) {
      let height = (extrude as any).paint.get('fill-extrusion-height').value.evaluate();
      // приходится очищать так как с либы обновление не реализовано
      this.map?.removeLayer(`${selectedPolygon}_extrude`);
      this.map?.removeSource(`${selectedPolygon}`);
      switch (operation) {
        case 'increment':
          this._renderExtrude(selectedPolygon, ++height)
          break;
        case 'decrement':
          this._renderExtrude(selectedPolygon, --height)
          break;
        case 'refresh':
          this._renderExtrude(selectedPolygon, height)
          break;
      }

    } else {
      this._renderExtrude(selectedPolygon, this.DEFAULT_HEIGHT_EXTRUDE);
    }

  }

  private _renderExtrude(id: string, height: number) {
    this.map?.addSource(id, {
      'type': 'geojson',
      'data': this.draw.getSelected()
    });
    this.map?.addLayer({
      'id': `${id}_extrude`,
      'type': 'fill-extrusion',
      'source': id,
      'paint': {
        'fill-extrusion-color': '#dadada',
        'fill-extrusion-opacity': 0.7,
        'fill-extrusion-height': ['+', 0, ['number', ['get', 'elev'], height]],
        'fill-extrusion-base': ['+', 0, ['number', ['get', 'elev'], 0]]
      }
    });
  }

}
