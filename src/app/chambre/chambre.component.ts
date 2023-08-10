import { Component, OnInit, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ReservationComponent } from '../reservation/reservation.component';
import { ModificationComponent } from '../modification/modification.component';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss'],
})
export class ChambreComponent implements OnInit {

  @Input() details = {
    num: "",
    etat: false,
    prixParJr: 0,
    type: "",
    dt_lct: "",
    nb_jour: 0,
  };

  constructor(private dialog: NbDialogService, private modifier: NbDialogService) { }

  ngOnInit(): void {
  }

  openRes() {
      this.dialog.open(ReservationComponent,).onClose.subscribe((v)=> {
      console.log(v);
    });
  }

  openModf() {
    this.modifier.open(ModificationComponent).onClose.subscribe((v)=> {
      console.log(v);
    });
  }
}
