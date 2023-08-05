import { Component } from '@angular/core';

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

  logIn() {
    if (this.email.toLowerCase() == "chahine@gmail.com" && this.mdp == "1234") {
      this.auth = true;
      this.mdp = "";
    }
  }

  logOut() {
    this.auth = false;
  }
}
