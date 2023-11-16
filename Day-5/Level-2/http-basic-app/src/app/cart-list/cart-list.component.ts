import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductI } from '../product';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent{

  cartItems = this.cartService.getCartItem() || [];
  cartTotal: number = 0;
  constructor(private cartService: CartService) {

  }

  removeItem(product: ProductI) {
    this.cartService.removeFromCart(product)
  }

  getTotal() {
    let sum = 0;

    this.cartItems.forEach((element) => {
      sum += element.price
    });

    this.cartTotal = sum;

    return this.cartTotal
  }

  addToCart(item:ProductI){
       this.cartService.addToCart(item)
  }

  removeFromCart(item:ProductI){
    this.cartService.removeFromCart(item)
  }





}
