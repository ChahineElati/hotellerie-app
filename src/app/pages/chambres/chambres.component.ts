import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chambre } from 'src/app/entities/chambre';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.scss']
})
export class ChambresComponent implements OnInit {


  lst_chmb!: Chambre[];
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/api/chambres/")
    .subscribe((data:any) => {
      this.lst_chmb = data;
    });
  }

}
