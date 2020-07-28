import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/Producto';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.less']
})
export class PrincipalComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  productos: any = [];
  imprimir: string;

  constructor(private productosService: ProductosService, private _cartService:CartService) { }

  ngOnInit() {
    this.getProductos();
  }
  getProductos() {
    this.productosService.getProductos()
      .subscribe(
        res => {
          this.productos = res;
        },
        err => console.error(err)
      );
  }
  borrarProducto(id: string) {
    this.productosService.deleteProducto(id)
      .subscribe(
        res => {
          console.log(res);
          this.imprimir = 'hola:${{id}}';
          this.getProductos();
        },
        err => console.error(err)
      )
  }

  public addCarro(producto: Producto) {
    producto.cantCarro = 1;
    console.log(producto)
    this._cartService.addCarro(producto);
  }
}
