import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AjouterSrvComponent } from 'src/app/ajouter-srv/ajouter-srv.component';
import { EffectuerSrvComponent } from 'src/app/effectuer-srv/effectuer-srv.component';
import { ModifierSrvComponent } from 'src/app/modifier-srv/modifier-srv.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

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

  modfSrv(plat: any) {
    this.modf.open(ModifierSrvComponent)
    .onClose
    .subscribe( nv_plat => nv_plat && (this.lst_plats[this.lst_plats.indexOf(plat)] = nv_plat));
  }

  effectuerSrv() {
    this.modf.open(EffectuerSrvComponent);
  }

  ajouterSrv() {
    this.modf.open(AjouterSrvComponent)
    .onClose
    .subscribe( nv_plat => nv_plat && (this.lst_plats.push(nv_plat)));
  }
}
