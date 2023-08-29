import { Component, OnInit } from '@angular/core';
import { Client } from '../entities/client';
import { NbDialogRef } from '@nebular/theme';
import { EvenementComponent } from '../evenement/evenement.component';

@Component({
  selector: 'app-ajouter-invite',
  templateUrl: './ajouter-invite.component.html',
  styleUrls: ['./ajouter-invite.component.scss']
})
export class AjouterInviteComponent implements OnInit {

  client: Client = new Client;

  constructor(private dialog: NbDialogRef<EvenementComponent>) { }

  ngOnInit(): void {
  }

  ajouterInvite() {
    this.dialog.close(this.client);
  }

  annuler() {
    this.dialog.close();
  }
}
