import { Component } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tiendaonline';

  constructor(public auth: AuthGuard){}
  
  public openCart: boolean = false;
  public carro() { //Se usa para abrir o cerrar el carrito
    this.openCart = !this.openCart;
  }
}
