import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
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

  // getProductById(){

  // }
}
