import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AjouterEvComponent } from 'src/app/ajouter-ev/ajouter-ev.component';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent implements OnInit {

  chmb1 = {
    num: "A-1",
    etat: false,
    prixParJr: 120,
    type: "s+1",
    dt_lct: "20/08/2023",
    nb_jour: 6,
  }

  chmb2 = {
    num: "B-1",
    etat: true,
    prixParJr: 150,
    type: "s+2",
    dt_lct: "02/05/2023",
    nb_jour: 8,
  }

  constructor(private dialog: NbDialogService) { }

  ngOnInit(): void {
  }

  ajouterEvn() {
    this.dialog.open(AjouterEvComponent);
  }

}
