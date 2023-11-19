import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel, StateModel } from '../../store/product.model';
import { Store } from '@ngrx/store'
import { getCartList, getLoading, getProducts } from '../../store/product.selector';
import { addProduct, loadCartList, loadProducts, loadProductSuccess } from '../../store/product.action';
import { ProductService } from '../../store/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{ product: StateModel }>, private cartService: ProductService) { }

  productSubsribe!: Subscription;
  productList: ProductModel[] = [];
  loading!: boolean;
  skeleton = new Array(20).fill(0)
  cartList:ProductModel[]= []
  ngOnDestroy(): void {
    if (this.productSubsribe) {
      this.productSubsribe.unsubscribe()
    }
  }
  ngOnInit(): void {

    this.store.dispatch(loadProducts())
    this.productSubsribe = this.store.select(getProducts).subscribe((data) => {
      this.productList = data;
      // console.log(this.productList)
    });

    this.store.select(getLoading).subscribe((isLoading) => {
      this.loading = isLoading;
      console.log(this.loading)
    })
   

  }

  addToCart(item:ProductModel) {
    if(this.cartList.includes(item)){
      alert("Product is Already Added")
    }
    else{
      this.store.dispatch(addProduct({productInput:item}))
      alert("Product has added to your cart")

    }
     
  }

}
