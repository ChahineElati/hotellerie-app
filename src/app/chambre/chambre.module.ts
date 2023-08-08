import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChambreComponent } from './chambre.component';



@NgModule({
  declarations: [
    ChambreComponent
  ],
  exports: [
    ChambreComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ChambreModule { }
