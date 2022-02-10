import { MiServicioService } from './../servicios/mi-servicio.service';
import { Location } from '@angular/common';

import { navesInterface } from './../interfaces/naves.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-nave',
  templateUrl: './detalles-nave.component.html',
  styleUrls: ['./detalles-nave.component.css']
})
export class DetallesNaveComponent implements OnInit {

  @Input() index: number;
  @Input() naves: navesInterface[];
  url: string;
  img: HTMLImageElement;
  id: number;
  
  

  constructor(private miServicio: MiServicioService, private location: Location, private route:ActivatedRoute) { }

  

  ngOnInit(): void {

    
    console.log(this.index)
    this.naves[this.index].name;
    //Obtenemos id de la "url" de la nave, para solicitar su imagen
    this.id = Number(this.naves[this.index].url.slice(32, -1));
    this.url = this.miServicio.getImagen(this.id);
    this.img = document.querySelector('.imgDetalle') as HTMLImageElement;
    this.img.setAttribute("src", this.url);

  }

  //cierra el apartado de detalles y vuelve a todas las naves

  close() { 
    this.miServicio.openClose('close');
    
  }
  

}
