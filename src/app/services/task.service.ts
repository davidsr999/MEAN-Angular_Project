import { Injectable } from '@angular/core';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private websvc: RequestsService) { }

  post(title: string): Observable<any> {
    return this.websvc.post('lists', {title});
  }

  getList() {
    return this.websvc.get('lists');
  }

  getTasks(listId: string) {
    return this.websvc.get(`lists/${listId}/tasks`);
  }
}
