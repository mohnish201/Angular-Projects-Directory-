import { createAction, props } from "@ngrx/store";
import { ProductModel } from "./product.model";


export const loadProducts = createAction("[product page] load Products");
export const loadProductSuccess = createAction("[product page] load product Success", props<{ productList: ProductModel[] }>());
export const loadProductsFailure = createAction("[product page] load Products Failure");

export const addProduct = createAction("addProduct", props<{ productInput: ProductModel }>())
export const updateProduct = createAction("updateProduct", props<{ productInput: ProductModel }>())
export const removeProduct = createAction("removeProduct", props<{ id: number }>())

export const loadCartList = createAction("[cart page] Get Cart List Success", props<{ cartList: ProductModel[] }>());

export const login = createAction("[login page] login")

export const logout = createAction("[logout] logout")