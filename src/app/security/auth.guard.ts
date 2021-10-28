import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.isInvalidAccessToken) {

      return this.auth.getNewAccessToken()
        .then(() => {
          if (this.auth.isInvalidAccessToken()) {
            this.router.navigate(['/login']);
            return false;
          }

          return true;
        });
    }

    else if (next.data.roles && !this.auth.hasAnyPermission(next.data.roles)) {
      this.router.navigate(['/not-authorized']);
      return false;
    }

    return true;
  }

}
