import { Component } from '@angular/core';
import {Product} from './product.model';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor() {
    this.products = [
      new Product('1', 'test1', 'http', ['a', 'b', 'c'], 10),
      new Product('2', 'test2', 'http', ['a', 'b', 'c'], 10),
      new Product('3', 'test3', 'http', ['a', 'b', 'c'], 10),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product was added', product);
  }
}
