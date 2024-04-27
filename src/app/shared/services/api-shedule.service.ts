import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY_SCHEDULE, API_KEY_SEARCH_CITY, DISTANCE, DOMAIN_SEARCH_CITY, DOMAIN_SHEDULE, LANG, LAT, LNG } from '../constants/api.constants';
import { TransportType } from '../interfaces/transport.interface';

@Injectable()
export class ApiSheduleService {

  constructor(private _http: HttpClient) { }

  public getSettlement(reqParams: {
    distance: number,
    lat: number,
    lng: number,
  }) {
    return this._http.get(`${DOMAIN_SHEDULE}nearest_settlement/`, {
      params: {
        apikey: API_KEY_SCHEDULE,
        lang: LANG,
        ...reqParams
      }
    });
  }

  public schedulePointToPoint(requestParams: {
    from: string;
    to: string;
    date: string;
    transport_types: TransportType | string;
  }) {
    return this._http.get(`${DOMAIN_SHEDULE}search`, {
      params: {
        apikey: API_KEY_SCHEDULE,
        lang: LANG,
        format: 'json',
        from: requestParams.from,
        to: requestParams.to,
        transport_types: requestParams.transport_types,
        date: requestParams.date
      }
    });
  }

  public scheduleOnStation() {
    return this._http.get(`${DOMAIN_SHEDULE}schedule`, {
      params: {
        apikey: API_KEY_SCHEDULE,
        lang: LANG,
        format: 'json',
      }
    });
  }

  public nearestStations(requestParams: {
    lng: string,
    lat: string,
    transport_types: string
  }) {
    return this._http.get(`${DOMAIN_SHEDULE}nearest_stations/`, {
      params: {
        apikey: API_KEY_SCHEDULE,
        distance: DISTANCE,
        ...requestParams
      }
    });
  }

  public searchCity(geocode: string) {
    return this._http.get(`${DOMAIN_SEARCH_CITY}`, {
      params: {
        apikey: API_KEY_SEARCH_CITY,
        format: 'json',
        lang: LANG,
        geocode,
      }
    })
  }
}
