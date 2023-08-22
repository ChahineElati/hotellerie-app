import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Evenement } from '../entities/evenement';
import { EvenementsComponent } from '../pages/evenements/evenements.component';

@Component({
  selector: 'app-ajouter-ev',
  templateUrl: './ajouter-ev.component.html',
  styleUrls: ['./ajouter-ev.component.scss']
})
export class AjouterEvComponent implements OnInit {

  evenement: Evenement = new Evenement;

  constructor(private ajouter: NbDialogRef<EvenementsComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.ajouter.close(this.evenement);
  }

  annuler() {
    this.ajouter.close();
  }

}
