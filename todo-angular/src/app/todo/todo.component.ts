import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todo/list-todo.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number = -1;
  todo: Todo = new Todo(this.id, '', false, new Date());

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);

    if (this.id != -1) {
      this.todoService
        .retrieveTodo('in28minutes', this.id)
        .subscribe((response) => (this.todo = response));
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoService
        .createTodo('in28minutes', this.todo)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['/todos']);
        });
    } else {
      this.todoService
        .updateTodo('in28minutes', this.id, this.todo)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['/todos']);
        });
    }
  }
}
