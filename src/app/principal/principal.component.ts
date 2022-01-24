import { Component, OnInit } from '@angular/core';
import { navesInterface } from './../naveInterface';
import { MiServicioService } from './../mi-servicio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private miServicio:MiServicioService) { }

  naves: any;

  ngOnInit(): void {

    this.miServicio.getNaves().subscribe(data => {
      console.log(data.results)
      this.naves = data.results;
    });
    

  }

}



  