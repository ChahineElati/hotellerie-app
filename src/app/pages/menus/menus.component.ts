import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AjouterPlatComponent } from 'src/app/ajouter-plat/ajouter-plat.component';
import { EffectuerPlatComponent } from 'src/app/effectuer-plat/effectuer-plat.component';
import { ModifierPlatComponent } from 'src/app/modifier-plat/modifier-plat.component';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  lst_plats = [
    {
      nom : "Galettes bretonnes",
      prix : 15,
      tmp_prep : 30,
      type : 'Salé'
    },
  ];

  constructor(private modf: NbDialogService) { }
  
  ngOnInit(): void {
  }

  supprimer(plat: any) {
    this.lst_plats.splice(this.lst_plats.indexOf(plat), 1);
  }

  modfPlat(plat: any) {
    this.modf.open(ModifierPlatComponent)
    .onClose
    .subscribe( nv_plat => nv_plat && (this.lst_plats[this.lst_plats.indexOf(plat)] = nv_plat));
  }

  effectuerPlat() {
    this.modf.open(EffectuerPlatComponent);
  }

  ajouterPlat() {
    this.modf.open(AjouterPlatComponent)
    .onClose
    .subscribe( nv_plat => nv_plat && (this.lst_plats.push(nv_plat)));
  }
}
