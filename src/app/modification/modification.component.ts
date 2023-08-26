import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ChambreComponent } from '../chambre/chambre.component';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit {

chmb = {
  num: '',
  prix_par_jr: 0,
  type: 's+0',
}

  constructor(private dialogRef: NbDialogRef<ChambreComponent>) { }

  ngOnInit(): void {
  }

  modifier() {
    this.dialogRef.close(this.chmb);
  }

  annuler() {
    this.dialogRef.close();
  }
}
