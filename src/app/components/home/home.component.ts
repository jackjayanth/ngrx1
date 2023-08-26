import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {
  addTodo,
  changeName,
  changeStatusOfTodo,
  deleteTodo,
} from 'src/app/state/home.actions';
import { Todo } from 'src/app/state/home.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  name: string = '';
  todos: Todo[] = [];
  newTodo: string = '';
  constructor(private store: Store<AppState>) {
    this.store.select('home').subscribe((data) => {
      this.name = data.name;
      this.todos = data.todos;
    });
  }

  updateName() {
    this.store.dispatch(changeName());
  }

  addTodo() {
    this.store.dispatch(addTodo({ todoTask: this.newTodo }));
    this.newTodo = '';
  }

  deleteTodo(id: number) {
    this.store.dispatch(deleteTodo({ id: id }));
  }

  changeStatus(todo: Todo) {
    this.store.dispatch(changeStatusOfTodo({ todo: todo }));
  }
}
