import { Component } from '@angular/core';
import { ApiSheduleService } from '../shared/services/api-shedule.service';
import { Subject, debounceTime, map, of, switchMap, take, takeUntil } from 'rxjs';
import { TransportType } from '../shared/interfaces/transport.interface';
import { Station } from '../shared/interfaces/station.interface';

@Component({
  selector: 'app-transport-schedule',
  templateUrl: './transport-schedule.component.html',
  styleUrl: './transport-schedule.component.scss',
  providers: [ApiSheduleService]
})
export class TransportScheduleComponent {

  listCruises: any[] = [];
  fromData: Station | null = null;
  searchResponseFromData: Station[] = [];
  toData: Station | null = null;
  searchResponseToData: Station[] = [];
  transportType: TransportType | string = 'plane,train,suburban,bus';
  date: Date = new Date();

  optionsTypeTransport: any[] = [
    { label: 'Любой', data: 'plane,train,suburban,bus' },
    { src: '/assets/icons/plane-icon.svg', data: 'plane' },
    { src: '/assets/icons/electric-train-icon.svg', data: 'suburban' },
    { src: '/assets/icons/train-icon.svg', data: 'train' },
    { src: '/assets/icons/bus-icon.svg', data: 'bus' }
  ];

  iconsTransport: any = {
    plane: '/assets/icons/plane-icon.svg',
    suburban: '/assets/icons/electric-train-icon.svg',
    train: '/assets/icons/train-icon.svg',
    bus: '/assets/icons/bus-icon.svg'
  }

  optionsDate: any[] = [
    { label: 'Сегодня', data: this.date },
    { label: 'Завтра', data: this._dateTomorrow }
  ];

  private get _dateTomorrow() {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + 1))
  }

  constructor(private _apiSheduleService: ApiSheduleService) { }

  public searchStationsFrom($event: any) {
    if (!$event?.query) return;
    this._searchStations($event.query)
      .subscribe(({ stations }: any) =>
        this.searchResponseFromData = stations
      )
  }

  public searchStationsTo($event: any) {
    if (!$event?.query) return;
    this._searchStations($event.query)
      .subscribe(({ stations }: any) =>
        this.searchResponseToData = stations
      )
  }

  public selectedStation() {
    if (!(this.fromData?.code && this.toData?.code)) return;
    this._apiSheduleService.schedulePointToPoint({
      from: this.fromData.code,
      to: this.toData.code,
      date: this.date.toISOString(),
      transport_types: this.transportType
    }).pipe(take(1)).subscribe(({ segments }: any) => this.listCruises = segments)
  }

  public swapStations() {
    [this.fromData, this.toData] = [this.toData, this.fromData]
  }

  private _searchStations(query: string) {
    return this._apiSheduleService.searchCity(query)
      .pipe(switchMap(({ response }: any) => {
        if (!response.GeoObjectCollection.featureMember.length) return of(null);
        const [lng, lat] = response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
        return this._apiSheduleService.nearestStations({
          lng: lng,
          lat: lat,
          transport_types: this.transportType
        })
      }), take(1))
  }
}
