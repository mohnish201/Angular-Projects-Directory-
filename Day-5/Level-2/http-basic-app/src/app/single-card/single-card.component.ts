import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductI } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css'],
})
export class SingleCardComponent {
  product: ProductI | any = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService:CartService
  ) {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      this.productService.getProductById(productId).subscribe(
        (data) => {
          this.product = data
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  addToCart(item: ProductI) {
    if (!this.cartService.cartItems.includes(item)) {
      this.cartService.addToCart(item)
      alert("Item Added to cart")
    }
    else {
      alert("Item is already in Cart")
    }
  }
}
