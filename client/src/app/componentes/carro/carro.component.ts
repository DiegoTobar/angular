import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { IItem } from '../../models/Interface';
// import { IItem } from '../../interfaces/item.interface';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.less']
})
export class CarroComponent implements OnInit {
  public items: Array<IItem>
  public totalPrecio: number = 0;
  public totalCantidad: number = 0;
  constructor(private _cartService: CartService) { }


  ngOnInit() {
    this._cartService.productosCarro$.subscribe(x => {
      if (x) {
        this.items = x;
        this.totalCantidad = x.length;
        this.totalPrecio = x.reduce((sum, current) => sum + (current.precio * current.stock), 0);
      }
    })
  }
  public remove(producto: IItem) {
    this._cartService.removeElementCart(producto);
  }

}