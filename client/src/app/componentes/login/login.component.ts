import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {


  user: {
    cedula: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    rol: 0,
    telefono:''
  };
  correo: string;
  contra: string;


  constructor(public auth: AuthService, public router: Router) { }

  login() {
    const user = { correo: this.correo, contra: this.contra };
    this.auth.loginUser(user).subscribe(data => {
      this.auth.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);alert("Usuario o contraseña Incorrectos");
    });
    // console.log("token:");
    // console.log(this.auth.getUserLogged());
    // if(console.error == 403)alert("Usuario o contraseña Incorrectos");
  }
  token(){
    console.log(this.auth.getToken());
  }

}
