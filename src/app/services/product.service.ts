import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'This is the product 1 description.',1,1000),
    new Product(2, 'Product 2', 'This is the product 2 description.',2,1500),
    new Product(3, 'Product 3', 'This is the product 3 description.',3,2500),
    new Product(4, 'Product 4', 'This is the product 4 description.',4,5000),
    new Product(5, 'Product 5', 'This is the product 5 description.',5,4000),
    new Product(6, 'Product 6', 'This is the product 6 description.',6,3000),
    new Product(7, 'Product 7', 'This is the product 7 description.',2,3500),
  ]
  constructor() { }

  getProduct(): Product[]{
    return this.products
  }


}
