import { navesInterface } from '../interfaces/naves.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MiServicioService } from './../servicios/mi-servicio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private miServicio:MiServicioService) { }

  naves: navesInterface[];
  pagActual: number;
  pagFinal: 4;
  active: boolean;
  index: number;
  modal: boolean;
  

  ngOnInit(): void {

    this.pagActual = 1;
    this.active = false;
    this.modal = false;

    this.miServicio.getNaves(this.pagActual).subscribe(data => {
      console.log(data.results)
      this.naves = data.results;

    });


    //recibe el valor de active para cambiar de vista de todas las naves a detalles i alrevés

    this.miServicio.active$.subscribe(resp => { this.active = resp });
 

  }

  

  onScroll() {

    if (this.pagActual < 5) {
    
      this.pagActual++;
      console.log(this.pagActual);
      this.miServicio.getNaves(this.pagActual).subscribe(data => {
        console.log(data.results)
        this.naves.push(...data.results);
        
      });
      
    }
    if (this.pagActual === 5) {

      this.modal = true;
      
    }
   
  }
hola(i:number) { 
    console.log(this.naves[i]);
    this.active = true;
    this.index = i;
   
  }
  

 
}






  