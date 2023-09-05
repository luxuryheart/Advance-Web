import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProduct: productsModel = [];
  total: number = 0
  count: number = 0

  constructor(private productService: ProductService) { }

  add(p_id: number){
    this.count += 1
    this.cartProduct.push(this.productService.getProdByID(p_id))
    console.log(this.cartProduct)
    this.total += this.productService.getProdByID(p_id).price
  }

  getCartAll() {
    return this.cartProduct
  }

  getSum() {
    return this.total
  }
    

}
