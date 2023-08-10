import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  num!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.num = this.route.snapshot.params['num'];
  }

}
