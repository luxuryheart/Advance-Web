import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  getAllCart () {
    return this.cart.getCartAll()
  }
  getSum() {
    return this.cart.getSum()
  }

}
