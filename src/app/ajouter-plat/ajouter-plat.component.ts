import { Component, OnInit } from '@angular/core';
import { MenusComponent } from '../pages/menus/menus.component';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-ajouter-plat',
  templateUrl: './ajouter-plat.component.html',
  styleUrls: ['./ajouter-plat.component.scss']
})
export class AjouterPlatComponent implements OnInit {

  plat = {
    nom: "",
    prix: 0,
    tmp_prep: 0,
    type: "",
  };

  constructor(private ajouter: NbDialogRef<MenusComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.ajouter.close(this.plat);
  }
  
  annuler() {
    this.ajouter.close();
  }
}
