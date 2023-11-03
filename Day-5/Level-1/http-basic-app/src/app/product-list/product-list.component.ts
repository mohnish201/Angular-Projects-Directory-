import { Component, OnInit } from '@angular/core';
import { ProductI } from '../product';
import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public productList: ProductI[] | any = [];
  public loading: boolean = false;
  public skeleton=new Array(20).fill(0)

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loading = true;
    this.productService.getProducts().subscribe(
      (data) => {
        console.log(data);
        this.productList = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading products:', error);
        this.loading = false;
      }
    );

    console.log(this.loading);
  }
}
