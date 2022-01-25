import { navesInterface } from '../naves.model';
import { Component, OnInit } from '@angular/core';
import { MiServicioService } from './../mi-servicio.service';

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

  ngOnInit(): void {

    this.pagActual = 1;
    this.active = false;

    this.miServicio.getNaves(this.pagActual).subscribe(data => {
      console.log(data.results)
      this.naves = data.results;
    });

    
    

  }

  onScroll() {
    
    
  }

  hola(i:number) { 
    console.log(this.naves[i]);
    this.active = true;
    this.index = i;
  }
}



  