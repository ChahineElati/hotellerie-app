import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { Repas } from 'src/app/entities/repas';
import { Service } from 'src/app/entities/service';

@Component({
  selector: 'app-clients-services',
  templateUrl: './clients-services.component.html',
  styleUrls: ['./clients-services.component.scss']
})
export class ClientsServicesComponent implements OnInit {

  id_srv!: number;
  clients!: Client[];
  srv!: Service;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id_srv = this.route.snapshot.params['id_srv'];
    this.http.get("http://localhost:8080/api/clients/services/" + this.id_srv).subscribe(
      (data:any) => {
        this.clients = data;
      }
    );
    this.http.get("http://localhost:8080/api/services/" + this.id_srv).subscribe((data:any)=> {
      this.srv = data;
    });
  }

}
