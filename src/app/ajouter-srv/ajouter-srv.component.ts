import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../pages/services/services.component';
import { NbDialogRef } from '@nebular/theme';
import { Service } from '../entities/service';

@Component({
  selector: 'app-ajouter-srv',
  templateUrl: './ajouter-srv.component.html',
  styleUrls: ['./ajouter-srv.component.scss']
})
export class AjouterSrvComponent implements OnInit {

  srv: Service = new Service();

  constructor(private ajouter: NbDialogRef<ServicesComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.ajouter.close(this.srv);
  }
  
  annuler() {
    this.ajouter.close();
  }

}
