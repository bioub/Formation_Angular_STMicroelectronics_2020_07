import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  // encapsulation: ViewEncapsulation.Emulated // (Emulated -> CSS Module)
})
export class SelectComponent implements OnInit {

  @Input() items = [];
  @Input() selected = '';
  @Output() selectedChange = new EventEmitter();

  opened = false;

  constructor() {
    // console.log('constructor', this.items); // []
    // this.selectedChange.emit('Toto');
  }

  ngOnInit(): void {
    // console.log('ngOnInit', this.items); // ['Romain', 'Jean', 'Toto']
    if (!this.selected && this.items.length) {
      this.selected = this.items[0];
    }
  }

  handleSelect(item) {
    this.selectedChange.emit(item);
    this.opened = false;
  }
}
