import { Component, Output, EventEmitter } from '@angular/core';
import {  TodoEntity, Todo } from '../todo.model';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  todo = new TodoEntity();

  @Output() add = new EventEmitter<TodoEntity>();

  handleSubmit() {
    // remonte la référence de l'objet au parent AppComponent
    // this.todo.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    // this.add.emit(this.todo);

    // remonte la copie de l'objet au parent AppComponent
    this.add.emit({
      ...this.todo, // SPREAD Object
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    });
  }
}
