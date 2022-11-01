import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private _http: HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    return this._http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number) {
    return  this._http.delete<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: string, id: number) {
    return  this._http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return  this._http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo)
  }

  createTodo(username: string, todo: Todo) {
    return  this._http.post<Todo>(`${API_URL}/users/${username}/todos`, todo)
  }

}
