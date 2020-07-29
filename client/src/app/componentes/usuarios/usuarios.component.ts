import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

import { UsuariosService } from '../../services/usuarios.service'
import { Subscriber, from } from 'rxjs';

import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.less']
})
export class UsuariosComponent implements OnInit {

  user: User= {
    cedula: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    rol: 0,
    telefono:''
  };

  edit: boolean = false;

  /* addUser(cedulaUser,nameUser,apellidoUser,emailUser,passwordUser,rolUser,telUser){
    //console.log(newUser.value);
    //console.log(passworUser.value);
    let name     = nameUser.value;
    let apellido = apellidoUser.value;
    let cedula   = cedulaUser.valuew;
    let email    = emailUser.value;
    let password = passwordUser.value;
    let rol      = rolUser.value;
    let tel      = telUser.value;
    console.log(name+" "+ apellido+" "+ cedula+" "+ email+" "+ password+" "+ rol+" "+ tel);
    nameUser.value = "";
    apellidoUser.value = "";
    cedulaUser.value = "";
    emailUser.value = "";
    passwordUser.value = "";
    rolUser.value = "";
    telUser.value = "";
    

    return false;
  } */

  constructor(private usuariosService:UsuariosService, private route: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    //console.log( params);
    if(params.id){
      this.usuariosService.getUser(params.id)
        .subscribe(
          res=>{
            console.log(res);
            this.user = res;
            this.edit = true;
          },
          err=>console.log(err)
        )

      
    }
  }

  saveNewUser(){
    console.log(this.user);
    this.usuariosService.saveUser(this.user)
      .subscribe(
      res =>{
        console.log(res);
        alert(" Registered USER");
        this.route.navigate(['/productos']);//redireccionar a la pagina productos
          
      },
      err=> {
        console.log(err);
        alert('Unregistered USER');
      }
      
      
    )
  }

  updateUser(){
    console.log(this.user);
     this.usuariosService.updateUser(this.user.cedula,this.user)
      .subscribe(
        res=>{
          console.log(res);
          this.route.navigate(['/usuarios/list']);
        },
        err=> console.log(err)
      ) 
  }

}
