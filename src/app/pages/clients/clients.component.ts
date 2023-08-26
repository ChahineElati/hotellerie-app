import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { Repas } from 'src/app/entities/repas';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  id_rep!: number;
  clients!: Client[];
  rep!: Repas;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id_rep = this.route.snapshot.params['rep_id'];
    this.http.get("http://localhost:8080/api/clients/repas/" + this.id_rep).subscribe(
      (data:any) => {
        this.clients = data;
      }
    );
    this.http.get("http://localhost:8080/api/repas/" + this.id_rep).subscribe((data:any)=> {
      this.rep = data;
    });
  }

}
