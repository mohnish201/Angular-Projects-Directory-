import { Injectable } from '@angular/core';
import { ProductI } from './product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: ProductI[] = [];


  addToCart(product: ProductI) {

    this.cartItems.push(product)
  }

  removeFromCart(product: ProductI) {
    const index = this.cartItems.findIndex(item => item.id == product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1)
    }
  }

  getCartItem() {
    return this.cartItems
  }
  constructor(private productService: ProductService) { }
}
