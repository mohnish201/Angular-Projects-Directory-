import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { ProductModel } from './product.model';
import {Observable} from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class ProductService{

     public cartList:ProductModel[]=[]
    constructor(private http: HttpClient, private router:Router ){

    }

    getAllProducts():Observable<ProductModel[]>{
        return this.http.get<ProductModel[]>("https://fakestoreapi.com/products")
    }

    getCartList(){
        return this.cartList
    }

    addProduct(product:ProductModel){
       this.cartList.push(product)
    }

    removeProduct(index:number){
        this.cartList.splice(index, 1)
    }

    login(email: string, password: string) {
        const loginData = {
          email,
          password
        };
    
        this.http.post<any>("https://reqres.in/api/login", loginData)
          .subscribe(
            (response) => {
              localStorage.setItem("token", response.token)
              this.router.navigate(['/'])
            //   this.token = response.token
            //   this.isAuthSubject.next(true);
            },
            (error) => {
              console.error('Login Error:', error);
              alert("Incorrect details")
            }
          );
      }
    
    
}

