import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ServicesComponent } from '../pages/services/services.component';

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

  constructor(private effct: NbDialogRef<ServicesComponent>) { }

  ngOnInit(): void {
    
  }

  effectuer() {
    this.effct.close();
  }

  close() {
    this.effct.close();
  }


}
