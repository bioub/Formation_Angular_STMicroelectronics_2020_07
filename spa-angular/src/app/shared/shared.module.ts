import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from "./select/select.component";


@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectComponent, // rends disponible app-select dans d'autres module
  ]
})
export class SharedModule { }
