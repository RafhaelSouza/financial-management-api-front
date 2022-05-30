import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';

import { environment } from './../../environments/environment';

@Injectable()
export class DashboardService {

  entriesUrl: string;

  constructor(private http: HttpClient) {
    this.entriesUrl = `${environment.apiUrl}/entries`;
  }

  entriesByCategory(): Promise<Array<any>> {
    return this.http.get<any>(`${this.entriesUrl}/statistics/by-category`)
      .toPromise();
  }

  entriesByDay(): Promise<Array<any>> {
    return this.http.get<Array<any>>(`${this.entriesUrl}/statistics/by-day`)
      .toPromise()
      .then(response => {
        this.stringsToDatesConverter(response);

        return response;
      });
  }

  private stringsToDatesConverter(datas: Array<any>) {
    for (const data of datas) {
      data.day = moment(data.day, 'YYYY-MM-DD').toDate();
    }
  }
}
