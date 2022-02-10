import { AutentificacionService } from './../servicios/autentificacion.service';
import { MiServicioService } from './../servicios/mi-servicio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.component.html',
  styleUrls: ['./cabezera.component.css']
})
export class CabezeraComponent implements OnInit {

  constructor(private miServicio: MiServicioService, private Auth: AutentificacionService, private route: Router) { }

  activar: boolean;
  logeado: boolean;

  ngOnInit(): void {
    this.activar = false;

    this.onChanges();
    
  }

  onChanges() { 
    this.Auth.modal$.subscribe(resp => { 
      if (resp === false) {

        let boton = document.querySelector("#log") as HTMLButtonElement;  
        boton?.click();
        
        
      } 
      
    })

    this.Auth.logeado$.subscribe(resp => { 

      this.logeado = resp;
      if (this.logeado === false) { 
        this.route.navigate(['']);
      }

    })

  }

  cambio(id: string) {
    
    if (id === 'login') { 
      
      this.activar = false;

    } else if (id === 'register') { 
      
      this.activar = true;

    }

  }
  clearInput() { 

    this.miServicio.clearInput();

  }

  logOut() { 
    this.Auth.logout();
    
  }

}
