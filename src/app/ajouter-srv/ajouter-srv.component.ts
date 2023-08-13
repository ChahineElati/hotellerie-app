import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../pages/services/services.component';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-ajouter-srv',
  templateUrl: './ajouter-srv.component.html',
  styleUrls: ['./ajouter-srv.component.scss']
})
export class AjouterSrvComponent implements OnInit {

  plat = {
    nom: "",
    prix: 0,
    tmp_prep: 0,
    type: "",
  };

  constructor(private ajouter: NbDialogRef<ServicesComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.ajouter.close(this.plat);
  }
  
  annuler() {
    this.ajouter.close();
  }

}
