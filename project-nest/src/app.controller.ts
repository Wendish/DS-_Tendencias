import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('articulos')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string[] {
    return this.appService.listaArticulos();
  }

  @Post()
  postHello(@Body() articulo: any) {
    this.appService.crearArticulo(articulo.item);
  }

}
