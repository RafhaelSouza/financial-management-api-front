import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as moment from 'moment';

export interface EntryFilter {
  description: string;
  dueDateFrom: Date;
  dueDateTo: Date;
}

@Injectable()
export class EntryService {

  entriesUrl = 'http://localhost:8080/entries';

  constructor(private http: HttpClient) { }

  search(filter: EntryFilter): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    let params = new HttpParams();

    if (filter.description) {
      params = params.set('description', filter.description);
    }

    if (filter.dueDateFrom) {
      params = params.set('dueDateFrom',
        moment(filter.dueDateFrom).format('YYYY-MM-DD'));
    }

    if (filter.dueDateTo) {
      params = params.set('dueDateTo',
        moment(filter.dueDateTo).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.entriesUrl}?summary`, { headers, params })
      .toPromise()
      .then(response => response['content']);
  }
}
