import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos: Todo[] = [];
  message: string = '';

  // todos = [
  //   new Todo(1, 'Buy milk', true, new Date()),
  //   new Todo(2, 'Make coffee', false, new Date()),
  //   new Todo(3, 'Read README', false, new Date())
  // ];

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoDataService.retrieveAllTodos(`in28minutes`).subscribe(
      response => this.todos = response
    )
  }

  deleteTodo(id: number){
    this.todoDataService.deleteTodo('Nawaz2000',id).subscribe(
      response => {
        this.message = `Deletion successful of Todo with id: ${id}`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id: number){
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
