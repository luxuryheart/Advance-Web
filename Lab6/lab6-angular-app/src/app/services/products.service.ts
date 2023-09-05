import { Injectable } from '@angular/core';
import { productsType } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  product_list: productsType = [
    {p_id:100001, p_name: 'Intel Core i7 Gen 10th', p_quantity:10, p_price: 7000},
    {p_id:100002, p_name: 'Intel Core i8 Gen 10th', p_quantity:5, p_price: 5000},
    {p_id:100003, p_name: 'Intel Core i9 Gen 10th', p_quantity:15, p_price: 6000},
    {p_id:100004, p_name: 'Intel Core i10 Gen 10th', p_quantity:8, p_price: 8000},
    {p_id:100005, p_name: 'Intel Core i11 Gen 10th', p_quantity:11, p_price: 9000},
  ]
  
  constructor() { }

  getAllProduct( ) {
    return this.product_list;
  }

  getSomeProduct(p_id: number) {
    return this.product_list[p_id];
  }
}
