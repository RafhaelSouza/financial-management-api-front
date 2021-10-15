import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CategoryService {

  categoriesUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  listAll(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.get(this.categoriesUrl, { headers })
      .toPromise();
  }

}
