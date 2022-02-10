import { AutentificacionService } from './servicios/autentificacion.service';
import { Component } from '@angular/core';
import { AutentificacionGuard } from './autentificacion.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sprint8-StarWarsAPI';

  logeado: boolean;

  constructor(private AuthService: AutentificacionService, private Guard: AutentificacionGuard) { }

  ngOnInit() {
   
  }

  /* Si quiere ver las naves: Obtenemos los daatos del "logeado" del del Guard (que tambien estan en el llocalStorage...), y pasamos  
  datos al Modal para que se abra, en lugar de la pàgina de naves... */

  comprueba() { 

    this.logeado = this.Guard.isLoggedIn();

    if (this.logeado === false) { 
  
      this.AuthService.loginModalOpen();
    }
   
  }
  
}
