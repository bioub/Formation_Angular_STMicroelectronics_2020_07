import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  now = new Date();
  @Input() delay = 1000;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

}
