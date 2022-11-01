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

  deleteTodo(username: string, id: number) {
    return  this._http.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: string, id: number) {
    return  this._http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return  this._http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo)
  }

  createTodo(username: string, todo: Todo) {
    return  this._http.post<Todo>(`http://localhost:8080/users/${username}/todos`, todo)
  }

}
