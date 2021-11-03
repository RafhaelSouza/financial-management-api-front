import { environment } from './../../environments/environment';
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

  entriesUrl: string;

  constructor(private http: HttpClient) {
    this.entriesUrl = `${environment.apiUrl}/entries`;
  }

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

  searchById(id: number): Promise<Entry> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.get<Entry>(`${this.entriesUrl}/${id}`, { headers })
      .toPromise()
      .then(response => {
        const entry = response;

        this.stringToDateConverter([entry]);

        return entry;
      });
  }

  save(entry: Entry): Promise<Entry> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.post<Entry>(this.entriesUrl, entry, { headers })
      .toPromise();
  }

  update(entry: Entry): Promise<Entry> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<Entry>(`${this.entriesUrl}/${entry.id}`,entry, { headers })
      .toPromise()
      .then(response => {
        const updatedEntry = response;

        this.stringToDateConverter([updatedEntry]);

        return updatedEntry;
      });
  }

  delete(id: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.delete(`${this.entriesUrl}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }

  private stringToDateConverter(entries: Entry[]) {
    for (const entry of entries) {
      entry.due_date = moment(entry.due_date, 'YYYY-MM-DD').toDate();

      if (entry.payment_date) {
        entry.payment_date = moment(entry.payment_date, 'YYYY-MM-DD').toDate();
      }
    }
  }
}
