import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AjouterPlatComponent } from 'src/app/ajouter-plat/ajouter-plat.component';
import { EffectuerPlatComponent } from 'src/app/effectuer-plat/effectuer-plat.component';
import { Repas } from 'src/app/entities/repas';
import { ModifierPlatComponent } from 'src/app/modifier-plat/modifier-plat.component';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  lst_plats!: Repas[];

  constructor(private modf: NbDialogService, private httpClient: HttpClient) { }
  
  ngOnInit(): void {

    this.httpClient.get("http://localhost:8080/api/repas/")
    .subscribe((data:any) => {
      this.lst_plats = data;
    });

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
