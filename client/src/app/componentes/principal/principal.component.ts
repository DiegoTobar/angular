import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { CartService } from '../../services/cart.service';
import { IItem } from '../../models/Interface';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.less']
})
export class PrincipalComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  productos: any = [];
  imprimir: string;

  constructor(private productosService: ProductosService) { }

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
}