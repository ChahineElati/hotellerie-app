import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AjouterEvComponent } from 'src/app/ajouter-ev/ajouter-ev.component';
import { Evenement } from 'src/app/entities/evenement';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent implements OnInit {

  lst_evt!: Evenement[];

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

  constructor(private dialog: NbDialogService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/api/evenements/")
    .subscribe( (data:any) => {
      this.lst_evt = data;
    })
  }

  ajouterEvn() {
    this.dialog.open(AjouterEvComponent);
  }

}
