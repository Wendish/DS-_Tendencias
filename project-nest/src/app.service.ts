
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  articulos: string[] = ['Espejo', 'Tijera', 'Pelota'];

  listaArticulos(): string[] {
    return this.articulos;
  }

  crearArticulo(articulo: string) {
    this.articulos.push(articulo);
  }

}
