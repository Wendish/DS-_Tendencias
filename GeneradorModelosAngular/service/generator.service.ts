import { Injectable } from '@angular/core';
import { Departamento } from '../modelos/departamento';
import { Edificio } from '../modelos/edificio';
import { Piso } from '../modelos/piso';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  edificioPrincipal: Edificio;
  pisosEdificio: Piso[] = [];
  departamentosPiso: Departamento[] = [];
  totalInquilinos: number;

  constructor() { }


  generarEdificio(pisos: number, departamento: number) {
    const edificio: Edificio = {
      id: 1, nombre: 'ValleVerde',
      ubucacion: 'Valle de los Chillos',
      pisos: this.generarPisos(pisos, departamento)
    };
    this.edificioPrincipal = edificio;
    console.log(this.edificioPrincipal);
    return this.edificioPrincipal;
  }

  generarPisos(pisos: number, departamentos: number) {

    for (let index = 0; index < pisos; index++) {
      const pEdificio: Piso = {
        id: 1,
        nombre: 'Piso' + index,
        departamentos: this.generarDepartamentos(departamentos)
      };
      this.pisosEdificio.push(pEdificio);
    }
    return this.pisosEdificio;
  }

  generarDepartamentos(departamentos: number) {
    for (let index = 0; index < departamentos; index++) {

      const dPiso: Departamento = {
        id: index,
        numeroInquilinos: this.getRandomInt(1, 8),
        numero: index
      };
      this.departamentosPiso.push(dPiso);
    }
    return this.departamentosPiso;

  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  countInquilinos() {

    this.totalInquilinos = 0;
    for (const departamento of this.departamentosPiso) {
      this.totalInquilinos += departamento.numeroInquilinos;
    }

    return this.totalInquilinos;

  }


}
