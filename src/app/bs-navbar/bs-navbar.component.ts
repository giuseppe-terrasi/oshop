import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Appuser } from '../models/app-user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: Appuser;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
    }
    );
   }

  logout() {
    this.auth.logout();
  }
}
