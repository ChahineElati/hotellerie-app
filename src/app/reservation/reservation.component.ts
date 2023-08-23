import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ChambreComponent } from '../chambre/chambre.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  form = {
    dt_lct: Date,
    nb_jours: 0,
  }

  constructor(private dialogRef: NbDialogRef<ChambreComponent>) { }

  ngOnInit(): void {
  }

  reserver() {
    this.dialogRef.close(this.form);
  }

  annuler() {
    this.dialogRef.close();
  }
}
