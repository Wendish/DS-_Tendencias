
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  id: number;
  estudiantes: string[] = ['Santiago', 'Carlos', 'Mario'];

  listaEstudiantes(): string[] {
    return this.estudiantes;
  }

  crearEstudiantes(estudiante: string) {
    this.estudiantes.push(estudiante);
  }

  eliminarEstudiante(estudiante: string) {
    this.id = this.estudiantes.indexOf(estudiante);
    this.estudiantes.splice(this.id, 1);
  }

}
