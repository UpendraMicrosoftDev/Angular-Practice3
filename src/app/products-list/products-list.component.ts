import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product} from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {
  // @ts-ignore
  @Input() productList: Product[];
  @Output() oProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.oProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.oProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;


  }
}
