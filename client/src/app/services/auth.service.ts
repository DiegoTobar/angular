import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookies: CookieService) { }
  // headers: HttpHeaders = new HttpHeaders({
  //   "Content-Type": "application/json"
  // });

  regUser(usuario: any): Observable<any>{
    const url = "http://localhost:3000/usuarios/reg";
    return this.http.post(url, usuario)
    // return this.http.post(
    //   url,
    //   { nombre, correo, contra },
    //   { headers: this.headers }
    // )
    //   .pipe(map(data => data));
  }

  loginUser(usuario: any): Observable<any> {
    const url = "http://localhost:3000/usuarios/login";
    return this.http.post(url, usuario)
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    this.cookies.get("token")
  }
  getUser(){
    return "Falta pogramar";
  }
  getUserLogged(){
    const token = this.getToken();
    const tok = { token}
    const url = "http://localhost:3000/usuarios/token";
    return this.http.post(url, tok)
  }
}
