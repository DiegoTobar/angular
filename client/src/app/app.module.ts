import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AgregarproductosComponent } from './componentes/agregarproductos/agregarproductos.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ProductosService } from './services/productos.service';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CarroComponent } from './componentes/carro/carro.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    UsuariosComponent,
    AgregarproductosComponent,
    AdminComponent,
    PrincipalComponent,
    CarroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
