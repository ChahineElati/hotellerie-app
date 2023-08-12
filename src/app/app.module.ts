import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbInputModule, NbButtonModule, NbUserModule, NbSelectModule, NbDialogModule, NbDatepickerModule, NbListModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { ChambresComponent } from './pages/chambres/chambres.component';
import { FormsModule } from '@angular/forms';
import { ChambreComponent } from './chambre/chambre.component';
import {MatIconModule} from '@angular/material/icon';
import { ReservationComponent } from './reservation/reservation.component';
import { ModificationComponent } from './modification/modification.component';
import { MenusComponent } from './pages/menus/menus.component';
import { ModifierPlatComponent } from './modifier-plat/modifier-plat.component';
import { AjouterPlatComponent } from './ajouter-plat/ajouter-plat.component';
import { EffectuerPlatComponent } from './effectuer-plat/effectuer-plat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChambresComponent,
    ChambreComponent,
    ReservationComponent,
    ModificationComponent,
    MenusComponent,
    ModifierPlatComponent,
    AjouterPlatComponent,
    EffectuerPlatComponent,
  ],
  imports: [
    BrowserModule,
    MenuModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbUserModule,
    FormsModule,
    NbSelectModule,
    MatIconModule,
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDatepickerModule,
    NbListModule,
    NbAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }