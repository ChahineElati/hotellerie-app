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

  supprimer(srv: any) {
    console.log(srv.id_srv);
    this.http.delete("http://localhost:8080/api/services/" + srv.id_srv).subscribe();
    this.lst_srv.splice(this.lst_srv.indexOf(srv), 1);
  }

  modfSrv(srv: Service) {
    this.modf.open(ModifierSrvComponent)
    .onClose
    .subscribe( (nv_srv:Service) => {

      if(nv_srv) {
        nv_srv.id_srv = this.lst_srv[this.lst_srv.indexOf(srv)].id_srv;
        this.lst_srv[this.lst_srv.indexOf(srv)] = nv_srv;
        this.http.put<Service>("http://localhost:8080/api/services/" + srv.id_srv, nv_srv).subscribe(
          () => {
            this.http.get("http://localhost:8080/api/services/")
    .subscribe((data:any) => {
      this.lst_srv = data;
    });
          }
        );
      }
      
    });
  }

  effectuerSrv(service: Service) {
    this.modf.open(EffectuerSrvComponent).onClose.subscribe(client => {
      this.http.put("http://localhost:8080/api/services/" + service.id_srv + "/clients", client).subscribe()
    });
  }

  ajouterSrv() {
    this.modf.open(AjouterSrvComponent)
    .onClose
    .subscribe( (nv_srv: Service) => {
      nv_srv && (this.lst_srv.push(nv_srv));
      this.http.post<Service>("http://localhost:8080/api/services/", nv_srv).subscribe(() => {
        this.http.get("http://localhost:8080/api/services/")
    .subscribe((data:any) => {
      this.lst_srv = data;
    });
      });
    }
      );

  }
}
