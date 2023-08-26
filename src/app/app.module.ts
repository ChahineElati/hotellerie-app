import { LOCALE_ID, NgModule } from '@angular/core';
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
import { ServicesComponent } from './pages/services/services.component';
import { AjouterSrvComponent } from './ajouter-srv/ajouter-srv.component';
import { EffectuerSrvComponent } from './effectuer-srv/effectuer-srv.component';
import { ModifierSrvComponent } from './modifier-srv/modifier-srv.component';
import { AjouterEvComponent } from './ajouter-ev/ajouter-ev.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ConfirmerComponent } from './confirmer/confirmer.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientsServicesComponent } from './pages/clients-services/clients-services.component';

registerLocaleData(localeFr, 'fr');

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
    ServicesComponent,
    AjouterSrvComponent,
    EffectuerSrvComponent,
    ModifierSrvComponent,
    AjouterEvComponent,
    EvenementComponent,
    ConfirmerComponent,
    EvenementsComponent,
    ClientsComponent,
    ClientsServicesComponent,
  ],
  imports: [
    BrowserModule,
    MenuModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
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
    HttpClientModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }