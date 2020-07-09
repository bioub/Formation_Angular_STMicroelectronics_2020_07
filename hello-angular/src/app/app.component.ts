import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  prenom = 'Toto';

  delayClock = 3000;
  showClock = true;

  handleClose() {
    console.log('close');
  }
}
