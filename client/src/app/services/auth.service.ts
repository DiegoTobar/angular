import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registrarUsuario(nombre:String, correo: string, contra: string){
    const url = "http://localhost:3000/usuarios";
    return this.http.post(
      url,
      {nombre, correo, contra},
      {headers: this.headers}
    )
    .pipe(map(data => data));
  }
  
  setToken(){}

  getToken(){
    return "token";
  }
}
