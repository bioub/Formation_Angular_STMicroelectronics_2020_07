import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() items: Todo[];
  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(item: Todo): void {
    this.delete.emit(item);
  }
}
