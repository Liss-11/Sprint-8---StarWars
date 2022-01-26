import { Naves} from './naves.model';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  private currentNavesSubject: BehaviorSubject<Naves> = new BehaviorSubject({} as Naves);
  public  currentNaves: Observable<Naves> = this.currentNavesSubject.asObservable();

  constructor(private http: HttpClient) { }

  naves: any;
  resposta: boolean;
  @Output() active$: EventEmitter<boolean> = new EventEmitter();
  


  getNaves(numPagina: number): Observable<Naves> { 
    
    return this.http.get<Naves>(`https://swapi.dev/api/starships/?page=${numPagina}`);
     
  }

/* characters (page : number = 1, name : string = "") {
    return this.http.get<any>(this.BASE_URL + `character?page=${page}&name=${name}` , {})
  } */

 /*  getImagen(i: number) { 
    let url = `https://starwars-visualguide.com/assets/img/starships/${i}.jpg`;
    return url;
  } */
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
    }

    this.active$.emit(this.resposta);

  }
  
  
}