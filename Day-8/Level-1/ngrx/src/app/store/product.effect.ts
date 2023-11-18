import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { loadProducts, loadProductSuccess } from './product.action';
import { ProductService } from './product.service';

@Injectable()


export class ProductEffects {

    constructor(private action$: Actions, private productService: ProductService) { }

    _product$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadProducts),
            exhaustMap((action) => {
                return this.productService.getAllProducts().pipe(
                    map((data) => { return loadProductSuccess({ productList: data }) }
                    ),
                    catchError(() => EMPTY)
                )
            })
        )
    )
}