import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AjouterEvComponent } from '../ajouter-ev/ajouter-ev.component';
import { ConfirmerComponent } from '../confirmer/confirmer.component';
import { Evenement } from '../entities/evenement';
import { HttpClient } from '@angular/common/http';
import { Client } from '../entities/client';
import { AjouterInviteComponent } from '../ajouter-invite/ajouter-invite.component';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  
  @Input() details!: Evenement;
  clients!: Client[];

  constructor(private dialog: NbDialogService, private http: HttpClient) { }

  ngOnInit(): void {
  }

openModf() {
  this.dialog.open(ConfirmerComponent)
  .onClose
  .subscribe((etat: boolean) => {
    this.details.etat = etat;
    this.http.put("http://localhost:8080/api/evenements/" + this.details.id_evt , this.details).subscribe(
      () => {
        this.http.get("http://localhost:8080/api/clients/").subscribe( (data:any) => {
          
          console.log(data);
          this.http.put("http://localhost:8080/api/evenements/" + this.details.id_evt + "/clients", data).subscribe();
          
        });
      }
    );
  });
}

openAjout() {
  this.dialog.open(AjouterInviteComponent).onClose.subscribe(
    (clt:Client) =>{
      clt.id_evt = this.details.id_evt;
      console.log(clt);
      this.http.post("http://localhost:8080/api/clients/evenement/" + this.details.id_evt, clt).subscribe();
    } 
  );
}

}