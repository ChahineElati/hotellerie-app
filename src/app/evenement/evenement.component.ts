import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AjouterEvComponent } from '../ajouter-ev/ajouter-ev.component';
import { ConfirmerComponent } from '../confirmer/confirmer.component';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  
  @Input() details = {
    num: "",
    etat: false,
    prixParJr: 0,
    type: "",
    dt_lct: "",
    nb_jour: 0,
  };


  constructor(private dialog: NbDialogService) { }

  ngOnInit(): void {
  }

  openRes() {
    this.dialog.open(AjouterEvComponent);
}

openModf() {
  this.dialog.open(ConfirmerComponent);
}

}
