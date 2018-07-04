import { Observable } from 'rxjs/Observable';
import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Appuser } from '../shared/models/app-user';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ShoppingCart } from '../shared/models/shopping-cart';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: Appuser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {}

  logout() {
    this.auth.logout();
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }
}
