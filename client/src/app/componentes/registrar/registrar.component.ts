import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.less']
})
export class RegistrarComponent {
  correo: string;
  contra: string;
  confirmContra: string;
  constructor() { }

  registrar(){
    console.log(this.correo)
  }
}
