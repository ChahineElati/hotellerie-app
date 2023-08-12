import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './menus.component';
import { NbButtonModule } from '@nebular/theme';



@NgModule({
  declarations: [
    MenusComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class MenusModule { }
