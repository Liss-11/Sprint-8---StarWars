
import { Naves, navesInterface } from './../naves.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-nave',
  templateUrl: './detalles-nave.component.html',
  styleUrls: ['./detalles-nave.component.css']
})
export class DetallesNaveComponent implements OnInit {

  @Input() index: number;
  @Input() naves: navesInterface[];

  constructor() { }

  

  ngOnInit(): void {

    this.naves[this.index].name;
 
  }

  

}
