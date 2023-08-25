import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private modf: NbDialogService, private httpClient: HttpClient, private router: Router,) { }
  
  ngOnInit(): void {

    this.httpClient.get("http://localhost:8080/api/repas/")
    .subscribe((data:any) => {
      this.lst_plats = data;
    });

  }

  supprimer(plat: any) {
    console.log(plat.id_rep);
    this.httpClient.delete("http://localhost:8080/api/repas/" + plat.id_rep).subscribe();
    this.lst_plats.splice(this.lst_plats.indexOf(plat), 1);
  }

  modfPlat(plat: Repas) {
    this.modf.open(ModifierPlatComponent)
    .onClose
    .subscribe( (nv_plat: Repas) =>
    {
      if(nv_plat) {
        nv_plat.id_rep = this.lst_plats[this.lst_plats.indexOf(plat)].id_rep;
        this.lst_plats[this.lst_plats.indexOf(plat)] = nv_plat;
        this.httpClient.put<Repas>("http://localhost:8080/api/repas/" + plat.id_rep, nv_plat).subscribe();
      }
    });
  }

  effectuerPlat() {
    this.modf.open(EffectuerPlatComponent).onClose.subscribe(client => {
      
    });
  }

  ajouterPlat() {
    this.modf.open(AjouterPlatComponent)
    .onClose
    .subscribe( (nv_plat: Repas)=> {
      if(nv_plat) {
        this.lst_plats.push(nv_plat);
        this.httpClient.post<Repas>("http://localhost:8080/api/repas/", nv_plat).subscribe();
        console.log(this.lst_plats);
        this.httpClient.get<Repas[]>("http://localhost:8080/api/repas/")
    .subscribe((data:Repas[]) => {
      this.lst_plats = data;
    });
      } 
    });
  }
}
