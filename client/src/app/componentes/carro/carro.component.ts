import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.less']
})
export class CarroComponent implements OnInit {
  public items: Array<Producto>;
  dtOptions: DataTables.Settings = {};
  public productoTotal: number = 0;
  public facturaTotal: number = 0;
  public cantidadTotal: number = 0;
  constructor(private _cartService: CartService) { }
  ngOnInit() {
    this.dtOptions = {
      pageLength: 10,
      // buttons: [
      //   'copy', 'excel', 'pdf'
      // ],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    };

    this._cartService.currentDataCart$.subscribe(x => {
      if (x) {
        this.items = x;
        this.cantidadTotal = x.length;
        this.facturaTotal = x.reduce((sum, current) => sum + ((current.precio - current.descuento) * current.cantCarro), 0);
      }
    })
  }
  public remove(producto: Producto) {
    console.log(producto)
    this._cartService.removeElementCart(producto);
  }
  public add(producto: Producto) {
    console.log(producto)
    this._cartService.addCarro(producto);
  }
  public less(producto: Producto) {
    console.log(producto)
    this._cartService.lessCarro(producto);
  }

}