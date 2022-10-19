import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsI } from '../components/home/home.component';




@Injectable({
    providedIn: 'root'
})
export class ItemService {
    url = 'http://localhost:3000/api/';

    constructor(private http: HttpClient){}

    get(): Observable<any> {
        return this.http.get(this.url);
    };

    post(item: ItemsI){
        return this.http.post(`${this.url}`, item);
    };

    put(item: ItemsI){
        return this.http.put(`${this.url}`, item);
    }

    delete(id: string): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }

}


