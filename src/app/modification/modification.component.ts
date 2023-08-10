import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ChambreComponent } from '../chambre/chambre.component';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit {

  v=false;

  constructor(private dialogRef: NbDialogRef<ChambreComponent>) { }

  ngOnInit(): void {
  }

  modifier() {
    this.dialogRef.close(this.v);
  }

  annuler() {
    this.dialogRef.close(this.v);
  }
}
