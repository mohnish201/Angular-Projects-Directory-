import {createFeatureSelector, createSelector} from '@ngrx/store'
import { ProductModel, StateModel } from './product.model'

const getProductState = createFeatureSelector<StateModel>('product');

export const getProducts = createSelector(getProductState, (state)=>{
    return state.products
})


export const getLoading= createSelector(getProductState, (state)=> {
    return state.loading
})

export const getCartList = createSelector(getProductState, (state)=> {
    return state.cartList
})

export const getAuth = createSelector(getProductState, (state)=> {
    return state.isAuth
})