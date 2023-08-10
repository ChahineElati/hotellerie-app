import { Component, NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ChambresComponent } from './pages/chambres/chambres.component';
import { MenuComponent } from './menu/menu.component';
import { MenusComponent } from './pages/menus/menus.component';
import { ServicesComponent } from './pages/services/services.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { HistoriqueComponent } from './pages/historique/historique.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
