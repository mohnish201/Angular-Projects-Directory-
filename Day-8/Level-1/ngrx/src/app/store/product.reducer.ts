import { state } from '@angular/animations'
import { createReducer, on } from '@ngrx/store'
import { addProduct,loadCartList, loadProducts, loadProductSuccess, login, logout, removeProduct } from './product.action'
import { ProductModel } from './product.model'
import { initialState } from './product.store'



const _productReducer = createReducer(initialState,

    on(loadProducts, (state) => {
        return { ...state, loading: true }
    }),
    on(loadProductSuccess, (state, action) => {
        return { ...state, loading: false, products: [...action.productList] }
    }),
    on(addProduct, (state, action) => {
        const item = { ...action.productInput };

        return { ...state, cartList: [...state.cartList, item] }
    }),
    on(loadCartList, (state, action) => {
        return { ...state, cartList: [...action.cartList] };
    }),
    on(removeProduct, (state, action) => {
        const updateProduct = state.cartList.filter((data: ProductModel) => {
            return data.id !== action.id
        })

        return {
            ...state, cartList: updateProduct
        }
    }),
    on(login, (state)=> {
        return {...state, isAuth:true}
    }),
    on(logout, (state)=> {
        return {...state, isAuth:false}
    } )



)

export const productReducer = (state: any, action: any) => {
    return _productReducer(state, action)
}