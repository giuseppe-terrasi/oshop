import { Observable } from 'rxjs/Observable';
import { AuthService } from './shared/services/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './shared/services/user.service';

import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appuser => appuser.isAdmin);
  }

}
