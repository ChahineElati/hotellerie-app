import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.scss']
})
export class ChambresComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
