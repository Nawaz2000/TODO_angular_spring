import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todo/list-todo.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = 0;
  todo:Todo = new Todo(-99,'',false, new Date());

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(this.route.snapshot.params['id'])
    this.todoService.retrieveTodo('Nawaz2000', this.id).subscribe(
      response => this.todo = response
    )
  }

  saveTodo(){
    
  }

}
