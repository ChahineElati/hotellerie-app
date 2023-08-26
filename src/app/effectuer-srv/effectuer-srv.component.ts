import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ServicesComponent } from '../pages/services/services.component';
import { Chambre } from '../entities/chambre';
import { HttpClient } from '@angular/common/http';
import { Client } from '../entities/client';

@Component({
  selector: 'app-effectuer-srv',
  templateUrl: './effectuer-srv.component.html',
  styleUrls: ['./effectuer-srv.component.scss']
})
export class EffectuerSrvComponent implements OnInit {

  client = {
    nom: '',
    prenom: '',
  };

  lst_chmb!: Chambre[];

  constructor(private effct: NbDialogRef<ServicesComponent>, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/api/chambres/")
    .subscribe((data:any) => {
      this.lst_chmb = data;
    });
  }

  effectuer(client: Client) {
    this.effct.close(client);
  }

  close() {
    this.effct.close();
  }


}
