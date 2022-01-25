import { Naves} from './naves.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  private currentNavesSubject: BehaviorSubject<Naves> = new BehaviorSubject({} as Naves);
  public  currentNaves: Observable<Naves> = this.currentNavesSubject.asObservable();

  constructor(private http: HttpClient) { }

  naves: any;
  


  getNaves(numPagina: number): Observable<Naves> { 
    
    return this.http.get<Naves>(`https://swapi.dev/api/starships/?page=${numPagina}`);
     
  }
  
  
}