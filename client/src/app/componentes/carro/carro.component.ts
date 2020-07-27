import { Component, OnInit } from '@angular/core';
import { IItem } from '../../models/Interface';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.less']
})
export class CarroComponent implements OnInit {
  public items: Array<IItem>

  constructor() { }

  ngOnInit(): void {
  }
  public remove(producto: IItem) {
    //Ya vamos a ver que hacemos acá
  }

}