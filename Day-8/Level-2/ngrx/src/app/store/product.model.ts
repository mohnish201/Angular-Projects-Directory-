

export interface ProductModel{
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string

}

export interface UserModel{
    // username:string,
    email:string,
    password:string
}

export interface StateModel{
    loading:boolean,
    products:ProductModel[],
    cartList:ProductModel[],
    userList:UserModel[],
    isAuth:boolean,
    token:string
}