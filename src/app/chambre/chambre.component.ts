import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit {

  @Input() details = {
    num: "",
    etat: false,
    prixParJr: 0,
    type: "",
    dt_lct: "",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
