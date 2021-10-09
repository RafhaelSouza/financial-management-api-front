import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EntryService {

  entriesUrl = 'http://localhost:8080/entries';

  constructor(private http: HttpClient) { }

  search(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.get(`${this.entriesUrl}?summary`, { headers })
      .toPromise()
      .then(response => response['content']);
  }
}
