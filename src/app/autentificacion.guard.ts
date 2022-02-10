import { AutentificacionService } from './servicios/autentificacion.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionGuard implements CanActivate {
  constructor(public router: Router, private Auth: AutentificacionService) { }

  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn()) {
      return true;
    } 
    this.router.navigate(['']);

    return false;

 
  }

  

  isLoggedIn(): boolean { 

    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true") {
      status = true;
    } else { 
      status = false;
      
    }
    
    return status;

  }
  
}
