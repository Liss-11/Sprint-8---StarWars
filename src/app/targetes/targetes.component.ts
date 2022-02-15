import { Pilot } from './../interfaces/pilot.model';
import { DetallesNaveComponent } from './../detalles-nave/detalles-nave.component';
import { MiServicioService } from './../servicios/mi-servicio.service';
import { Component, Input, OnInit } from '@angular/core';
import { navesInterface } from '../interfaces/naves.model';

@Component({
  selector: 'app-targetes',
  templateUrl: './targetes.component.html',
  styleUrls: ['./targetes.component.css']
})
export class TargetesComponent implements OnInit {

  @Input() pilotoX: Pilot;
  

  constructor(private miServicio: MiServicioService, private detalles: DetallesNaveComponent) { }

  ngOnInit(): void {
    
  }
  close() { 
    this.miServicio.closeTargeta();
    
  }

}
