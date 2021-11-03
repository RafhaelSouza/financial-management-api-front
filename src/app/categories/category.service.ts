import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CategoryService {

  categoriesUrl: string;

  constructor(private http: HttpClient) {
    this.categoriesUrl = `${environment.apiUrl}/categories`;
  }

  listAll(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.get(this.categoriesUrl, { headers })
      .toPromise();
  }

}
