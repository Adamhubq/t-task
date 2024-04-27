import { Component } from '@angular/core';
import { ApiSheduleService } from '../shared/services/api-shedule.service';
import { Subject, debounce, debounceTime, map, switchMap, take, takeUntil } from 'rxjs';
import { mocStation, mock } from '../shared/constants/api.constants';

@Component({
  selector: 'app-transport-schedule',
  templateUrl: './transport-schedule.component.html',
  styleUrl: './transport-schedule.component.scss',
  providers: [ApiSheduleService]
})
export class TransportScheduleComponent {

  listCruises: any[] = [];
  fromData = { title: '' }
  searchResponseFromData: any = [];
  toData = { title: '' }
  searchResponseToData: any = [];
  searchFrom$: Subject<void> = new Subject();
  searchTo$: Subject<void> = new Subject();
  transportType: string = 'plane,train,suburban,bus';
  date: Date | undefined;
  city = mock.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.AdministrativeAreaName

  constructor(private _apiSheduleService: ApiSheduleService) {
  }

  ngOnInit() {
    this.searchFrom$.pipe(
      debounceTime(500),
      switchMap(() => this._apiSheduleService.searchCity(this.fromData.title)),
      map(({ response }: any) => response.GeoObjectCollection),
      take(1)
    ).subscribe(({ featureMember }) =>
      this.searchResponseFromData = featureMember
    )
    // console.log(mock.response.GeoObjectCollection.featureMember); 

    // this.searchResponseFromData = mock.response.GeoObjectCollection.featureMember;
    // this.searchResponseToData = mock.response.GeoObjectCollection.featureMember;

  }

  search() {
    this.searchResponseFromData = mocStation.stations;
    // const [lng, lat] = mock.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
    // this._apiSheduleService.nearestStations({
    //   lng: lng,
    //   lat: lat,
    //   transport_types: this.transportType,
    // }).subscribe(
    //   res => {
    //     console.log(res);
    //   }
    // )
    // this._apiSheduleService.scheduleOnStation().subscribe(res => {
    //   console.log(res);
    // })
  }

  searchStationsFrom($event: any) {
    this._searchStations($event.query).subscribe(({ stations }: any) => {
      this.searchResponseFromData = stations;
    })
  }

  searchStationsTo($event: any) {
    this._searchStations($event.query).subscribe(({ stations }: any) => {
      this.searchResponseToData = stations;
    })
  }

  private _searchStations(query: string) {
    return this._apiSheduleService.searchCity(query)
      .pipe(switchMap(({ response }: any) => {
        const [lng, lat] = response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
        return this._apiSheduleService.nearestStations({
          lng: lng,
          lat: lat,
          transport_types: this.transportType
        })
      }))

  }

  selectedStation() {
    console.log(this.fromData);
    console.log(this.toData);
  }

}
