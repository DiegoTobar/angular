import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  API_URI = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getCompras(){
    return this.http.get('http://localhost:3000/compras');
  }

  getCompra(id: string){
    return this.http.get('http://localhost:3000/compras/'+id);
  }
  saveCompra(producto: Producto){
    return this.http.post('http://localhost:3000/compras',producto);
  }
}