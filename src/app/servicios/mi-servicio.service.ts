
import { Naves, navesInterface} from './../interfaces/naves.model';
import { HttpClient} from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class MiServicioService {



  constructor(private http: HttpClient) { }

  naves: Naves;
  resposta: boolean;
  @Output() active$: EventEmitter<boolean> = new EventEmitter();
  //index de la nave
  index: number;
  @Output() index$: EventEmitter<number> = new EventEmitter();
  imagen: any;
  


  getNaves(numPagina: number): Observable<Naves> { 

    
   /*  return this.http.get<Naves>(`https://swapi.dev/api/starships/?page=${numPagina}`); */
    return this.http.get <Naves>(`https://swapi.dev/api/starships/?page=${numPagina}`);
     
  }


  getImagen(id: number) {
    let apiUrl = "https://starwars-visualguide.com/assets/img/starships/"
    let resposta = apiUrl + id + '.jpg';
    
    return resposta;
  }
  
  

  //cambia la vista de tofdas las naves a los detales i alrevés

  openClose(orden: string): void { 
    
    if (orden === 'close') {
      this.resposta = false;
    } else  { 
      this.resposta = true;
      //manda index al servicio
      this.index$.emit(this.index);
    }

    this.active$.emit(this.resposta);
  }

  //Limpiar los inpiuts del HTML

  clearInput() {
    let inputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    inputs.forEach(element => {
      element.value = "";
    });
    
    let parrafos = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
    parrafos.forEach(element => {
      element.innerHTML = "";

    });
  }

 
    
  

  
}