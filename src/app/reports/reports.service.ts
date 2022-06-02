import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as moment from 'moment';

import { environment } from './../../environments/environment';

@Injectable()
export class ReportsService {

  entriesUrl: string;

  constructor(private http: HttpClient) {
    this.entriesUrl = `${environment.apiUrl}/entries`;
  }

  reportEntriesByPerson(begin: Date, end: Date) {
    const params = new HttpParams()
      .set('begin', moment(begin).format('YYYY-MM-DD'))
      .set('end', moment(end).format('YYYY-MM-DD'));

    return this.http.get(`${this.entriesUrl}/reports/by-person`,
      { params, responseType: 'blob' })
      .toPromise();
  }

}
