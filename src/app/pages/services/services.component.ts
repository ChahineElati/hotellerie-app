import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AjouterSrvComponent } from 'src/app/ajouter-srv/ajouter-srv.component';
import { EffectuerSrvComponent } from 'src/app/effectuer-srv/effectuer-srv.component';
import { Service } from 'src/app/entities/service';
import { ModifierSrvComponent } from 'src/app/modifier-srv/modifier-srv.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  lst_srv!: Service[];

  constructor(private modf: NbDialogService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/api/services/")
    .subscribe((data:any) => {
      this.lst_srv = data;
    });
  }

  supprimer(plat: any) {
    this.lst_srv.splice(this.lst_srv.indexOf(plat), 1);
  }

  modfSrv(srv: any) {
    this.modf.open(ModifierSrvComponent)
    .onClose
    .subscribe( nv_srv => nv_srv && (this.lst_srv[this.lst_srv.indexOf(srv)] = nv_srv));
  }

  effectuerSrv() {
    this.modf.open(EffectuerSrvComponent);
  }

  ajouterSrv() {
    this.modf.open(AjouterSrvComponent)
    .onClose
    .subscribe( nv_srv => nv_srv && (this.lst_srv.push(nv_srv)));
  }
}
