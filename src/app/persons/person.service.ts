import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class PersonFilter {
  name: string;
  page = 0;
  itemsPerPage = 5;
}

@Injectable()
export class PersonService {

  personsUrl = 'http://localhost:8080/persons';

  constructor(private http: HttpClient) { }

  search(filter: PersonFilter): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');
    let params = new HttpParams()
      .set('page', filter.page.toString())
      .set('size', filter.itemsPerPage.toString());

    if (filter.name) {
      params = params.set('name', filter.name);
    }

    return this.http.get(`${this.personsUrl}`, { headers, params })
      .toPromise()
      .then(response => {
        const persons = response['content'];

        const result = {
          persons,
          total: response['total_elements']
        };

        return result;
      });
  }

  listAll(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.get(this.personsUrl, { headers })
      .toPromise()
      .then(response => response['content']);
  }

  delete(id: number): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AZG9tYWluLmNvbTphZG1pbg==');

    return this.http.delete(`${this.personsUrl}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }
}
