import { AutentificacionService } from './../servicios/autentificacion.service';
import { Component, OnInit } from '@angular/core';
import { AutentificacionGuard } from '../autentificacion.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private AuthService: AutentificacionService, private Guard: AutentificacionGuard) { }

  

  ngOnInit(): void {

    
   
  }
  comprueba() { 

    if (this.Guard.isLoggedIn() === false) { 
  
      this.AuthService.loginModalOpen();
    }
   
  }


  }


