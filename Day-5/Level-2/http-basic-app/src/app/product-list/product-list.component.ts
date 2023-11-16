import { Component, OnInit } from '@angular/core';
import { ProductI } from '../product';
import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public productList: ProductI[] | any = []
  public loading: boolean = false;
  public skeleton = new Array(20).fill(0)
  public filteredList: ProductI[] | any = []
  public category: string | any = ''
  public order: string | any = ''
  public search:string|any=''

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.loading = true;
    this.productService.getProducts().subscribe(
      (data) => {
        // console.log(data);
        this.productList = data
        this.filteredList = this.productList
        this.loading = false;
      },
      (error) => {
        console.error('Error loading products:', error);
        this.loading = false;
      }
    );

    // console.log(this.loading);
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

  filterByCategory() {

    if (this.category == "" || undefined || null) {
      this.filteredList = this.productList
    }
    else {
      this.productService.filterByCategory(this.category).subscribe(data => {
        this.filteredList = data
      })
    }


  }

  sortByPrice() {

    if (this.order == "" || undefined || null) {
      this.filteredList = this.productList
    }
    else if (this.order == "asc") {
      this.filteredList = this.filteredList.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price)
    }
    else if (this.order == "desc") {
      this.filteredList = this.filteredList.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price)

    }
  }

  searchProduct(){

    let filteredProducts = this.filteredList.filter((product: { category: string; }) => product.category.toLowerCase().includes(this.search));
       
    this.filteredList = filteredProducts
  }

}
