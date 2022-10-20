import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  readonly URL;

  constructor(private http: HttpClient) {
    this.URL = "http://localhost:3000";
   }

  get(url: string) {
    return this.http.get(`${this.URL}/${url}`);
  };

  post(url: string, newelement: Object) {
    return this.http.post(`${this.URL}/${url}`, newelement);
  };

  patch(url: string, newelement: Object) {
    return this.http.patch(`${this.URL}/${url}`, newelement);
  };

  delete(url: string, newelement: Object) {
    return this.http.delete(`${this.URL}/${url}`);
  };
}
