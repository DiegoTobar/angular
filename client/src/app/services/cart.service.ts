import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carro = new BehaviorSubject<Array<Producto>>(null); //Definimos nuestro BehaviorSubject, este debe tener un valor inicial siempre
  public currentDataCart$ = this.carro.asObservable(); //Tenemos un observable con el valor actual del BehaviourSubject
  constructor() { }
  public addCarro(newData: Producto) {
    //Obtenemos el valor actual
    let listCart = this.carro.getValue();
    //Si no es el primer item del carrito
    if (listCart) {
      //Buscamos si ya cargamos ese item en el carrito
      let objIndex = listCart.findIndex((obj => obj.idArticulo == newData.idArticulo));
      //Si ya cargamos uno aumentamos su cantidad
      if (objIndex != -1) {
        listCart[objIndex].cantCarro += 1;
      }
      //Si es el primer item de ese tipo lo agregamos derecho al carrito
      else {
        listCart.push(newData);
      }
    }
    //Si es el primer elemento lo inicializamos
    else {
      listCart = [];
      listCart.push(newData);
    }
    this.carro.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  }
  public lessCarro(newData: Producto){
    let listCart = this.carro.getValue();
    if (listCart) {
      let objIndex = listCart.findIndex((obj => obj.idArticulo == newData.idArticulo));
      //Si ya cargamos uno aumentamos su cantidad
      if (listCart[objIndex].cantCarro > 1) {
        console.log("listCart")
        console.log(listCart[objIndex].cantCarro)
        listCart[objIndex].cantCarro -= 1;
      }
      //Si es el primer item de ese tipo lo agregamos derecho al carrito
      else {
        this.removeElementCart(newData)
      }
    }
    this.carro.next(listCart);
  }
  public removeElementCart(newData: Producto) {
    //Obtenemos el valor actual de carrito
    let listCart = this.carro.getValue();
    //Buscamos el item del carrito para eliminar
    let objIndex = listCart.findIndex((obj => obj.idArticulo == newData.idArticulo));
    if (objIndex != -1) {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].stock = 1;
      //Eliminamos el item del array del carrito
      listCart.splice(objIndex, 1);
    }
    this.carro.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  }
}
