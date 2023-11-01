import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  order: string = '';
  filteredProducts: Product[] = [];
  category: string = '';
  brand: string = '';
  cartItems = this.cartServices.getCartItems();
  newCategory: string[] = [];

  constructor(
    private productServices: ProductService,
    private cartServices: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productServices.getProducts();
    this.filteredProducts = this.products;
  }

  addToCart(product: Product) {
    if (!this.cartItems.includes(product)) {
      this.cartServices.addToCart(product);
      alert('Added to Cart');
    } else {
      alert('Already in cart');
    }
  }

  sortProducts() {
    if (this.order == '') {
      this.filteredProducts = [...this.products]
    } else if (this.order === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.order === 'desc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    } else {
    }
  }

  filterByCategory(category: string) {
    if (category === 'All') {
      this.filteredProducts = this.products;
    } else if (category === 'Sofas') {
      const sofa = this.products.filter((pro) => pro.category === category);
      this.filteredProducts = [...sofa];
    } else if (category === 'Beds') {
      const bed = this.products.filter((pro) => pro.category === category);
      this.filteredProducts = [...bed];
    } else if (category === 'Chairs') {
      const chair = this.products.filter((pro) => pro.category === category);
      this.filteredProducts = [...chair];
    }
  }

  filterByBrand(brand: string) {
    if (brand === 'ALL') {
      this.filteredProducts = this.products;
    } else if (brand === 'INTEX') {
      const intex = this.products.filter((pro) => pro.brand === brand);
      this.filteredProducts = [...intex];
    } else if (brand === 'GYMAX') {
      const gymax = this.products.filter((pro) => pro.brand === brand);
      this.filteredProducts = [...gymax];
    } else if (brand === 'VIDAXL') {
      const vidaxl = this.products.filter((pro) => pro.brand === brand);
      this.filteredProducts = [...vidaxl];
    } else if (brand === 'COSTWAY') {
      const Costway = this.products.filter((pro) => pro.brand === brand);
      this.filteredProducts = [...Costway];
    }
  }
}
