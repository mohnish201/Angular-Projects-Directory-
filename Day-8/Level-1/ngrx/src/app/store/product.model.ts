

export interface ProductModel{
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string

}

export interface StateModel{
    loading:boolean,
    products:ProductModel[],
    cartList:ProductModel[],
    isAuth:boolean,
    token:string
}