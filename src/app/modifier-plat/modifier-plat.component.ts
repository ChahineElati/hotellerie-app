import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { MenusComponent } from '../pages/menus/menus.component';

@Component({
  selector: 'app-modifier-plat',
  templateUrl: './modifier-plat.component.html',
  styleUrls: ['./modifier-plat.component.scss']
})
export class ModifierPlatComponent implements OnInit {

  
  plat = {
    nom: "",
    prix: 0,
    tmp_prep: 0,
    type: "",
  };

  constructor(private modfRef: NbDialogRef<MenusComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.modfRef.close(this.plat);
  }
  
  annuler() {
    this.modfRef.close();
  }

}
