import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreationComponent } from './creation/creation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'hotellerie';
  name = "Chahine Elati";
  email = "";
  mdp = "";
  auth = true;
  bad_crd!: boolean;

  logIn() {
    if (this.email.toLowerCase() == "chahine@gmail.com" && this.mdp == "1234") {
      this.auth = true;
      this.mdp = "";
      this.bad_crd = false;
    } else {
      this.bad_crd = true;
    }
  }

  logOut() {
    this.auth = false;
  }
}
