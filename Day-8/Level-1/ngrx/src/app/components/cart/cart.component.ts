import { Component, OnInit } from '@angular/core';
import { ProductModel, StateModel } from '../../store/product.model';
import { ProductService } from '../../store/product.service';
import { Store } from '@ngrx/store'
import { getCartList } from '../../store/product.selector';
import { loadProducts, removeProduct } from '../../store/product.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: ProductModel[] = []
  cartTotal: number = 0;
  constructor(private cartService: ProductService, private store: Store<{ product: StateModel }>) {

  }

  ngOnInit(): void {
    this.store.select(getCartList).subscribe((data) => this.cartItems = data)
    console.log(this.cartItems)
  }


  getTotal() {
    let sum = 0;

    this.cartItems.forEach((element) => {
      sum += element.price
    });

    this.cartTotal = sum;

    return this.cartTotal
  }



  removeFromCart(id: number) {
    if (confirm("Are you sure want to remove")) {

      this.store.dispatch(removeProduct({ id: id }))


    }
  }
}
