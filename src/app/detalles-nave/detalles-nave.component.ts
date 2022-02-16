import { Pilot } from './../interfaces/pilot.model';
import { MiServicioService } from './../servicios/mi-servicio.service';
import { Location } from '@angular/common';

import { navesInterface } from './../interfaces/naves.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-nave',
  templateUrl: './detalles-nave.component.html',
  styleUrls: ['./detalles-nave.component.css']
})
export class DetallesNaveComponent implements OnInit {

  @Input() index: number;
  @Input() naves: navesInterface[];
  @Output() naves$: EventEmitter<string[]> = new EventEmitter();
  url: string;
  img: HTMLImageElement;
  id: number;
  piloto: Pilot;
  pilotoX: Pilot;
  pilotos: Pilot[] = [];
  contador: number;
  activo: boolean;
  primero: boolean;

  
  

  constructor(private miServicio: MiServicioService, private location: Location, private route:ActivatedRoute) { }

  

  ngOnInit(): void {

   /*  this.naves[this.index].name; */
    //Obtenemos id de la "url" de la nave, para solicitar su imagen
    this.id = Number(this.naves[this.index].url.slice(32, -1));
    this.url = this.miServicio.getImagen(this.id);
    this.img = document.querySelector('.imgDetalle') as HTMLImageElement;
    this.img.setAttribute("src", this.url);
    this.activo = false;
    this.primero = true;
    /* this.pilotos = [] */
    
    this.ngAfterContentInit();
    this.ngOnChanges();


  }

  ngAfterContentInit() { 
    this.naves[this.index].pilots.forEach(pilot => { 
      
      this.miServicio.getPilotos(pilot).subscribe(data => { 
        
        this.piloto = data;
        this.pilotos.push(this.piloto);
  
      });
       
    })

    console.log(this.pilotos.length);
    
  }

  ngOnChanges() { 
    this.miServicio.targeta$.subscribe(resp => {
      this.activo = resp
    });
  }
//Tiene que devolver la info del JSON del los pilotos con estas URL y pasando por un servicio...
  /* enviar() {

    this.naves$.emit(this.naves[this.index].pilots);
    console.log(this.naves[this.index].pilots)


  } */
  
  activar(piloto: Pilot) { 
    
    this.activo = true;
    this.pilotoX = piloto;
   /*  console.log(url); */

  }


  //cierra el apartado de detalles y vuelve a todas las naves

  close() { 
    this.miServicio.openClose('close');

    this.activo = false;
    
  }
  

}
