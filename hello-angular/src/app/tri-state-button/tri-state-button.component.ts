import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tri-state-button',
  templateUrl: './tri-state-button.component.html',
  styleUrls: ['./tri-state-button.component.css']
})
export class TriStateButtonComponent implements OnInit {

  @Input() states = ['blue', 'red', 'yellow'];
  @Input() indexShown = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.indexShown = (this.indexShown + 1) % this.states.length;
  }
}
