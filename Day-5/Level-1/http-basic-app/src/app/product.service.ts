import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { ProductI } from './product';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public data:ProductI[]=[]
  
  constructor(private http: HttpClient) { }

   getProducts(): Observable<ProductI[]>{
   return this.http.get<ProductI[]>('https://fakestoreapi.com/products');
   }

   getProductById(id:number){
     return this.http.get(`https://fakestoreapi.com/products/${id}`)
   }


}
