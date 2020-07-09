import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {

  now = new Date();
  @Input() delay = 1000;

  private intervalId;

  constructor() { }

  ngOnInit(): void {
    // this.intervalId = setInterval(() => {
    //   this.now = new Date();
    // }, this.delay);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ancien delay', changes.delay.previousValue);
    // console.log('nouveau delay', changes.delay.currentValue);
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.now = new Date();
    }, changes.delay.currentValue);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
