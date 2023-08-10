import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ChambreComponent } from '../chambre/chambre.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  v=false;

  constructor(private dialogRef: NbDialogRef<ChambreComponent>) { }

  ngOnInit(): void {
  }

  reserver() {
    this.dialogRef.close(this.v);
  }

  annuler() {
    this.dialogRef.close(this.v);
  }
}
