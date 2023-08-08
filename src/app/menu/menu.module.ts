import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { NbAccordionModule, NbCardModule, NbMenuModule } from '@nebular/theme';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports : [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    NbAccordionModule,
    NbCardModule,
    NbMenuModule,
  ],
})
export class MenuModule { }
