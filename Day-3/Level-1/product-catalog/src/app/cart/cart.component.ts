import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems = this.cartServices.getCartItems() || []
  cartTotal:number=0

  constructor(private cartServices: CartService){

  }

  removeItem(product:any){
    this.cartServices.removeFromCart(product)
  }

  getTotal(){
    let sum = 0
     this.cartItems.forEach((el) => {
        sum+= el.price
     })
     this.cartTotal = sum

     return this.cartTotal
  }



}
