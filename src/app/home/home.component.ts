import { AutentificacionService } from './../servicios/autentificacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AutentificacionService) { }

  /* modal: HTMLElement = document.querySelector("#login") as HTMLElement; */

  ngOnInit(): void {

   /*  this.authService.close$.subscribe(close => { 
      this.modal.classList.add('hide'); */
    }


  }


