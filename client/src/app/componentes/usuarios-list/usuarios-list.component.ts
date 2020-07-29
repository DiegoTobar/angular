import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service'
import { from } from 'rxjs';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.less']
})
export class UsuariosListComponent implements OnInit {

  users: any = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getUsers();
    /* this.usuariosService.getUsers().subscribe(
      //res => console.log(res),
      res => {this.users = res;},
      err => console.log(err)
    ) */
  }

  getUsers(){
    this.usuariosService.getUsers().subscribe(
      //res => console.log(res),
      res => {this.users = res;},
      err => console.log(err)
    )
  }

  deleteuser(id:string){
    //console.log(id);
    if( confirm("Do you want to DELETE user?")){
      this.usuariosService.deleteUser(id).subscribe(
        res => {
          console.log(res)
          this.getUsers();
        },
        err => console.log(err)

      )
    }
  }

}
