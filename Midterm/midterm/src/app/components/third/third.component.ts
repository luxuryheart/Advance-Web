import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private productService: ProductService, private cart: CartService) {
    
   }

  ngOnInit(): void {
  }

  getAllProducts(){
    return this.productService.getAllProd()
  }

  addProd(p_id: number) {
    this.cart.add(p_id)
    this.productService.getProdByID(p_id)
    this.productService.deleteProd(p_id)
  }



}
