import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Juan';
  apellido = 'Días';
  private edad = 18;
  enableFrame = false;
  registeredUser = false;
  registeredText = 'No hay usuario registrado';
  empresa = 'Google';

  getEdad() {
    return this.edad;
  }

  getRegistroUsuario() {
    this.registeredUser = true;
  }

  setRegisteredUser(event: Event) {
    if ((<HTMLInputElement>event.target).value == 'si') {
      this.registeredText = 'Se ha registrado un usuario';
    } else {
      this.registeredText = 'No hay usuario registrado';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
