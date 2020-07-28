import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get('http://localhost:3000/productos');
  }

  getProducto(id: string){
    return this.http.get('http://localhost:3000/productos/'+id);
  }
  saveProducto(producto: Producto){
    return this.http.post('http://localhost:3000/productos',producto);
  }
  deleteProducto(id:String){
    return this.http.delete('http://localhost:3000/productos/'+id);
    
  }
  updateProducto(id:string|number, updateProducto: Producto): Observable<Producto> {
    return this.http.put('http://localhost:3000/productos/'+id,updateProducto);
  }

  // private carro = new BehaviorSubject<Array<Producto>>(null); //Definimos nuestro BehaviorSubject, este debe tener un valor inicial siempre
  // public currentDataCart$ = this.carro.asObservable(); //Tenemos un observable con el valor actual del BehaviourSubject
  // public addCarro(newData: Producto) {
  //   console.log("asasas")
  //   //Obtenemos el valor actual
  //   let listCart = this.carro.getValue();
  //   //Si no es el primer item del carrito
  //   if (listCart) {
  //     //Buscamos si ya cargamos ese item en el carrito
  //     let objIndex = listCart.findIndex((obj => obj.idArticulo == newData.idArticulo));
  //     //Si ya cargamos uno aumentamos su cantidad
  //     if (objIndex != -1) {
  //       listCart[objIndex].cantCarro += 1;
  //     }
  //     //Si es el primer item de ese tipo lo agregamos derecho al carrito
  //     else {
  //       listCart.push(newData);
  //     }
  //   }
  //   //Si es el primer elemento lo inicializamos
  //   else {
  //     listCart = [];
  //     listCart.push(newData);
  //   }
  //   newData.cantCarro += 1;
  //   console.log(listCart.length);
  //   console.log(listCart[0].cantCarro);
  //   this.carro.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  // }
}
