import { Component, NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ChambresComponent } from './pages/chambres/chambres.component';
import { MenuComponent } from './menu/menu.component';
import { MenusComponent } from './pages/menus/menus.component';
import { ServicesComponent } from './pages/services/services.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientsServicesComponent } from './pages/clients-services/clients-services.component';
import { ClientsEvtComponent } from './pages/clients-evt/clients-evt.component';

const routes: Routes = [
  {
    path: '',
    component: ChambresComponent,
  },
  {
    path: 'chambres',
    component: ChambresComponent,
  },
  {
    path: 'menus',
    component: MenusComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'evenements',
    component: EvenementsComponent,
  },
  {
    path: 'historique/:num',
    component: HistoriqueComponent,
  },
  {
    path: 'repas/:rep_id/clients',
    component: ClientsComponent,
  },
  {
    path: 'services/:id_srv/clients',
    component: ClientsServicesComponent,
  },
  {
    path: 'evenements/:id_evt/clients',
    component: ClientsEvtComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
