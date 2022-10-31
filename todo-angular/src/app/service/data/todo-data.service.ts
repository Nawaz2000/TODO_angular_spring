import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private _http: HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    return this._http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

}
