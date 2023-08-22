import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { EvenementComponent } from '../evenement/evenement.component';

@Component({
  selector: 'app-confirmer',
  templateUrl: './confirmer.component.html',
  styleUrls: ['./confirmer.component.scss']
})
export class ConfirmerComponent implements OnInit {

  etat!: boolean;

  constructor(private confirmer: NbDialogRef<EvenementComponent>) { }

  ngOnInit(): void {
  }

  oui() {
    this.etat = true;
    this.confirmer.close(this.etat);
  }

  non() {
    this.etat = false;
    this.confirmer.close(this.etat);
  }
  
}
