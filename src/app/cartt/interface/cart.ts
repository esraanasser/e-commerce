export interface Cart {
    numOfCartItems:number,
    data:data,

}
interface data{
    totalCartPrice:number,
    _id:string,
    products:product[]
}
interface product{
count:number,
price:number,
product:innerProduct
}
interface innerProduct{
    title:string,
    imageCover:string,
    category:category,
    id:string,
}
interface category{
    name:string,
}