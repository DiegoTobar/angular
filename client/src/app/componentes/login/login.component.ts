import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  user: {
    cedula: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    rol: 0,
    telefono:''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
