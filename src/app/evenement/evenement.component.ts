import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AjouterEvComponent } from '../ajouter-ev/ajouter-ev.component';
import { ConfirmerComponent } from '../confirmer/confirmer.component';
import { Evenement } from '../entities/evenement';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  
  @Input() details!: Evenement;


  constructor(private dialog: NbDialogService, private http: HttpClient) { }

  ngOnInit(): void {
  }

openModf() {
  this.dialog.open(ConfirmerComponent)
  .onClose
  .subscribe((etat: boolean) => {
    this.details.etat = etat;
    console.log(this.details.etat);
    this.http.put("http://localhost:8080/api/evenements/" + this.details.id_evt, this.details).subscribe();
  });
}
}
