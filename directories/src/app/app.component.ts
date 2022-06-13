import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Registro de Usuarios';
  mensaje = '';
  registered = false;
  nombre = '';
  apellido = '';
  entradas: object[];

  constructor() {
    this.entradas = [
      { titulo: 'Python' },
      { titulo: 'Javascript' },
      { titulo: '.NET' },
    ];
  }

  registerUser() {
    this.registered = true;
    this.mensaje = 'registrado!';
  }
}
