import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../service/generator.service';

@Component({
  selector: 'app-edificio',
  templateUrl: './edificio.component.html',
  styleUrls: ['./edificio.component.css']
})
export class EdificioComponent implements OnInit {
  total: number;

  constructor(public generadorService: GeneratorService) { }

  ngOnInit() {

    this.generarEdificio();
    this.numeroInquilinos();
  }

  generarEdificio() {
    this.generadorService.generarEdificio(3, 5);
  }

  numeroInquilinos() {
    this.total = this.generadorService.countInquilinos();
    console.log('Total de Inquilinos: ' + this.total);
  }



}
