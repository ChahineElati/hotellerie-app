import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { MenusComponent } from '../pages/menus/menus.component';

@Component({
  selector: 'app-effectuer-plat',
  templateUrl: './effectuer-plat.component.html',
  styleUrls: ['./effectuer-plat.component.scss']
})
export class EffectuerPlatComponent implements OnInit {

  client = {
    nom: '',
    prenom: '',
  };

  constructor(private effct: NbDialogRef<MenusComponent>) { }

  ngOnInit(): void {
  }

  effectuer() {
    this.effct.close();
  }

  close() {
    this.effct.close();
  }

}
