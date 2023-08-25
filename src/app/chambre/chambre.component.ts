import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ReservationComponent } from '../reservation/reservation.component';
import { ModificationComponent } from '../modification/modification.component';
import { HttpClient } from '@angular/common/http';
import { Chambre } from '../entities/chambre';
import { Client } from '../entities/client';
import { concat } from 'rxjs';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss'],
})
export class ChambreComponent implements OnInit {

  @Input() chmb!: Chambre;
  etat!: boolean;
  client: Client = new Client;
  clt = {
    nom:'',
    numtel: '',
  }
  
  constructor(private dialog: NbDialogService, private modifier: NbDialogService, private http:HttpClient) { }

  ngOnInit(): void {
    this.clt.nom = this.chmb.client.nom_clt;
    this.clt.numtel = this.chmb.client.num_tel;
      let dt_fin = new Date(this.chmb.dt_lct);
      dt_fin.setDate(dt_fin.getDate() + this.chmb.nb_jours);
      let dt_curr = new Date();
      this.etat = !(dt_curr>dt_fin);
  }

  // ngOnChanges(changes: SimpleChanges) {
    
  //   this.http.get<Client>("http://localhost:8080/api/clients/" + this.chmb.client.id_clt).subscribe(
  //     (clt: Client) =>{
  //       this.client = clt;
  //     }
  //   );

  // }

  openRes() {
      this.dialog.open(ReservationComponent,).onClose.subscribe((form)=> {
        if(form) {
          this.chmb.dt_lct = form.dt_lct;
          this.chmb.nb_jours = form.nb_jours;
          this.etat = true;
          this.client.nom_clt = form.nom_clt;
          this.client.num_tel = form.num_tel;
          this.clt.nom = this.client.nom_clt;
          this.clt.numtel = this.client.num_tel;
          concat(
            this.http.post("http://localhost:8080/api/clients/", this.client),
            this.http.put("http://localhost:8080/api/chambres/date/" + this.chmb.id_chmb, this.chmb)
          ).subscribe();
        }
    });
  }

  openModf() {
    this.modifier.open(ModificationComponent).onClose.subscribe((prix_par_jr)=> {
      this.chmb.prix_par_jr = prix_par_jr;
      this.http.put("http://localhost:8080/api/chambres/prix_par_jour/" + this.chmb.id_chmb, this.chmb).subscribe();
    });
  }
}
