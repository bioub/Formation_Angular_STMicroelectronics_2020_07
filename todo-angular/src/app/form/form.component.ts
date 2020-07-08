import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  todo = {
    title: '',
    completed: false,
  };

  @Output() add = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    // remonte la référence de l'objet au parent AppComponent
    // this.todo.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    // this.add.emit(this.todo);

    // remonte la copie de l'objet au parent AppComponent
    this.add.emit({
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      ...this.todo, // SPREAD Object
    });
  }
}
