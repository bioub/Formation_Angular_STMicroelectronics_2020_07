import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
