import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tiendaonline';

  public openCart:boolean = false;
  public carro(){ //Se usa para abrir o cerrar el carrito
    this.openCart = !this.openCart;
  }
}
