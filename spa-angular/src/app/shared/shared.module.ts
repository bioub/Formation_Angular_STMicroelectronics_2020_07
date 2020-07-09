import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from "./select/select.component";


@NgModule({
  declarations: [
    SelectComponent
    // composants pipes ou directives
  ],
  imports: [
    CommonModule, // ngIf, ngFor, ngClass, | date, | uppercase
  ],
  exports: [
    // composants
    SelectComponent, // rends disponible app-select dans d'autres module

    // pipes
    // directives

    // modules
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
