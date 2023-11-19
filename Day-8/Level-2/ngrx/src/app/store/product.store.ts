import { StateModel } from "./product.model";


export const initialState: StateModel = {
    loading: false,
    products: [],
    cartList: [],
    userList:[],
    isAuth: false,
    token: ""
}

