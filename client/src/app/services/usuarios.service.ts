import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI= 'http://localhost:3000/user'

  constructor(private http: HttpClient) {

   }

   getUsers(){
     return this.http.get(`${this.API_URI}`);
   }
   getUser( id: string){
    return this.http.get(`${this.API_URI}/${id}`);
  }
  saveUser(user:User){
    return this.http.post(`${this.API_URI}`,user);
  }
  deleteUser(id: string){
    return this.http.delete(`${this.API_URI}/${id}`);
  }
  updateUser(id:string|number, updateUser:User):Observable<User>{
    return this.http.put(`${this.API_URI}/${id}`,updateUser);
  }

   


}
