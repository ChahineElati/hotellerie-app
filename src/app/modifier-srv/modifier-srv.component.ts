import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ServicesComponent } from '../pages/services/services.component';
import { Service } from '../entities/service';

@Component({
  selector: 'app-modifier-srv',
  templateUrl: './modifier-srv.component.html',
  styleUrls: ['./modifier-srv.component.scss']
})
export class ModifierSrvComponent implements OnInit {

  srv = {
    id_srv:0,
    label:"",
    categorie:"",
    prix:0,
    clients: [],
  }

  constructor(private ajouter: NbDialogRef<ServicesComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.ajouter.close(this.srv);
  }
  
  annuler() {
    this.ajouter.close();
  }

}
