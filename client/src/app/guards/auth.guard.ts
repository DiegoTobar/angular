import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    // this.auth.getUserLogged().subscribe(data => {
    //   return true;
    // },
    //   error => {
    //     this.router.navigate(['/login']);
    //     return false;
    //   });
    if (this.auth.getToken()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
