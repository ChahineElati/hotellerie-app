import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { Evenement } from 'src/app/entities/evenement';

@Component({
  selector: 'app-clients-evt',
  templateUrl: './clients-evt.component.html',
  styleUrls: ['./clients-evt.component.scss']
})
export class ClientsEvtComponent implements OnInit {

  clients!: Client[];
  id_evt!: number;
  evt!: Evenement;

  constructor(private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_evt = this.route.snapshot.params["id_evt"];
    this.http.get("http://localhost:8080/api/evenements/" + this.id_evt).subscribe(
      (data:any) => {
        this.evt = data;
      }
    );
    this.http.get("http://localhost:8080/api/clients/evenement/" + this.id_evt).subscribe(
      (data:any) => {
        this.clients = data;
      }
    );
  }

}
