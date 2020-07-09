import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ClockComponent } from './clock/clock.component';
import { CounterComponent } from './counter/counter.component';
import { ExerciceHelloWorldComponent } from './exercice-hello-world/exercice-hello-world.component';
import { TriStateButtonComponent } from './tri-state-button/tri-state-button.component';
import { HelloListComponent } from './hello-list/hello-list.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ClockComponent,
    CounterComponent,
    ExerciceHelloWorldComponent,
    TriStateButtonComponent,
    HelloListComponent,
    SelectComponent,

    // Directive
    // Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // me donne accès à ngModel
    NgSelectModule, // me donne accès à ng-select
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
