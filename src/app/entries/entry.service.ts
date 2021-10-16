import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as moment from 'moment';

import { Entry } from './../core/model';

export class EntryFilter {
  description: string;
  dueDateFrom: Date;
  dueDateTo: Date;
  page = 0;
  itemsPerPage = 5;
}

@Injectable()
export class EntryService {

  entriesUrl = 'http://localhost:8080/entries';

  constructor(private http: HttpClient) { }

  search(filter: EntryFilter): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    let params = new HttpParams()
      .set('page', filter.page.toString())
      .set('size', filter.itemsPerPage.toString());

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
      .then(response => {
        const entries = response['content'];

        const result = {
          entries,
          total: response['total_elements']
        };

        return result;
    });
  }

  save(entry: Entry): Promise<Entry> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.post<Entry>(this.entriesUrl, entry, { headers })
      .toPromise();
  }

  delete(id: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.delete(`${this.entriesUrl}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }
}
