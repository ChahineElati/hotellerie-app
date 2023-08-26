import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { MenusComponent } from '../pages/menus/menus.component';
import { Chambre } from '../entities/chambre';
import { HttpClient } from '@angular/common/http';
import { Client } from '../entities/client';

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

  lst_chmb!: Chambre[];
  
  constructor(private effct: NbDialogRef<MenusComponent>, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/api/chambres/")
    .subscribe((data:any) => {
      this.lst_chmb = data;
    });
  }

  effectuer(client : Client) {
    this.effct.close(client);
  }

  close() {
    this.effct.close();
  }

}
