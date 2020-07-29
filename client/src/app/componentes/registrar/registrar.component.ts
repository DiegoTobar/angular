import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.less']
})
export class RegistrarComponent {
  correo: string;
  contra: string;
  confirmContra: string;
  telefono: string;
  nombre: string;
  apellido: string;
  
  constructor(public auth: AuthService) { }

  registrar() {
    const user = { correo: this.correo, contra: this.contra };
    this.auth.regUser(user).subscribe(data => {
      console.log(data);
    });
  }
}
