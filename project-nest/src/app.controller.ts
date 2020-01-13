import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('articulos')
export class AppController {

  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string[] {
    return this.appService.listaEstudiantes();
  }

  @Delete()
  postHello(@Body() estudiante: any) {
    this.appService.eliminarEstudiante(estudiante);
  }

  @Post()
  ctreartHello(@Body() estudiante: any) {
    this.appService.crearEstudiantes(estudiante);
  }

}
