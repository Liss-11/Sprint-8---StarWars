import { EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
  

   
export class AutentificacionService {

  @Output() close$: EventEmitter<boolean> = new EventEmitter();
 
  @Output() modal$: EventEmitter<boolean> = new EventEmitter();

  logeado: boolean;

  constructor(public router: Router) { }

  returnUrl = '/starships';
  

  login(nombre:string) { 
    localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', nombre);
    this.router.navigate([this.returnUrl]);
    this.logeado = true;
    /* this.Guard.canActivate(); */
   

  }

  //añadir parámetro, para saber la key - el usuario que cierra sesssón, en lugar de poner "token"
  logout() :void {    
   localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');  
    this.logeado = false;
    /* this.Guard.canActivate(); */
  } 
  
  close() { 

    this.close$.emit(true);
  }

  loginModalOpen() { 

    this.modal$.emit(this.logeado);

  }
}
