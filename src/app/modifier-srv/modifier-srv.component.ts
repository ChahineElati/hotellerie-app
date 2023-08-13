import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ServicesComponent } from '../pages/services/services.component';

@Component({
  selector: 'app-modifier-srv',
  templateUrl: './modifier-srv.component.html',
  styleUrls: ['./modifier-srv.component.scss']
})
export class ModifierSrvComponent implements OnInit {

  plat = {
    nom: "",
    prix: 0,
    tmp_prep: 0,
    type: "",
  };

  constructor(private modfRef: NbDialogRef<ServicesComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.modfRef.close(this.plat);
  }
  
  annuler() {
    this.modfRef.close();
  }

}
