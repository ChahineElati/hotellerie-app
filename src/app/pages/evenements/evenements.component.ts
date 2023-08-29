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

  constructor(private dialog: NbDialogService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/api/evenements/")
    .subscribe( (data:any) => {
      this.lst_evt = data;
    });
  }

  ajouterEvn() {
    this.dialog.open(AjouterEvComponent)
    .onClose
    .subscribe((nv_evt: Evenement) => {
      if(nv_evt) {
        this.lst_evt.push(nv_evt);
        this.http.post("http://localhost:8080/api/evenements/", nv_evt).subscribe(
          () => {
            this.http.get("http://localhost:8080/api/evenements/")
    .subscribe( (data:any) => {
      this.lst_evt = data;
    });
          }
        );
        
      }
    });
  }

}
