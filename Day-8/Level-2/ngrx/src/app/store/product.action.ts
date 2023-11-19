import { createAction, props } from "@ngrx/store";
import { ProductModel, UserModel } from "./product.model";

//product
export const loadProducts = createAction("[product page] load Products");
export const loadProductSuccess = createAction("[product page] load product Success", props<{ productList: ProductModel[] }>());
export const loadProductsFailure = createAction("[product page] load Products Failure");


//product crud
export const addProduct = createAction("addProduct", props<{ productInput: ProductModel }>())
export const updateProduct = createAction("updateProduct", props<{ productInput: ProductModel }>())
export const removeProduct = createAction("removeProduct", props<{ id: number }>())

export const loadCartList = createAction("[cart page] Get Cart List Success", props<{ cartList: ProductModel[] }>());

//login
export const login = createAction("[login page] login")

//logout
export const logout = createAction("[logout] logout")

//register
export const register= createAction("[register page] register success")
export const registerSuccess = createAction("[register page] register", props<{newUser:UserModel }>())