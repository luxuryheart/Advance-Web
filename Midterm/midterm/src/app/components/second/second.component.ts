import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  productForm = new FormGroup({
    type: new FormControl(''),
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(1), Validators.max(50)]),
    price: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100000)]),
  });

  productType: string[] = ['CPU', 'RAM', 'HDD', 'Mainboard'];

  // get check() {
  //   return this.productForm.controls;
  // }

  get id() {
    return this.productForm.get('id')
  }
  get name() {
    return this.productForm.get('name')
  }
  get detail() {
    return this.productForm.get('detail')
  }
  get quantity() {
    return this.productForm.get('quantity')
  }
  get price() {
    return this.productForm.get('price')
  }

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {}

  addProduct() {
    if (this.productForm.valid) {
      this.productsService.addProduct(this.productForm.value);
      alert("Add product to database successfully")
      this.productForm.reset();
    } else {
      alert("Please fill in all required fields and ensure data is valid.");
    }
  }
}


