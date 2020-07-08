import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [
    {
      id: 123,
      title: 'Pain',
      completed: false,
    },
    {
      id: 234,
      title: 'Eau',
      completed: true,
    },
    {
      id: 345,
      title: 'Lait',
      completed: false,
    },
  ];

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
