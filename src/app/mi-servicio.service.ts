import { naves, navesInterface } from './naveInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  info: navesInterface;

  constructor(private http: HttpClient) { }


  getNaves(): Observable<naves> { 

    return this.http.get<naves>('https://swapi.dev/api/starships/?page=1');
     
  }

  
}