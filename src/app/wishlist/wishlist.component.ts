import { CartService } from 'shared/services/cart.service';
import { Product } from '../product';
import { WishlistService } from './../wishlist.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  Products:Product[]=[];
  wishListData:string[]=[];

constructor(private _WishlistService:WishlistService,
  private _CartService:CartService,
  private _ProductService:ProductService,
  private _ToastrService:ToastrService){

}
  ngOnInit(): void {
    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
        console.log(response);
        this.Products = response.data
        const newdata = response.data.map((item:any)=> item._id);
        this.wishListData = newdata
        
      }
    })

   
  }


  addToCart(id:string){
    this._CartService.addProductToCart(id).subscribe(
      {
        next:(response)=> {
          console.log(response)
          this._CartService.numOfCartItems.next(response.numOfCartItems)
        },
        error:(err)=>console.log(err)
        
      }
    )
  }
  addFav (prodId:string):void{
    this._WishlistService.addToWishList(prodId).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
        this.wishListData = response.data
      }
    })
   }
   removeFav(prodId:any):void{
    this._WishlistService.removeWishlist(prodId).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message)
        this.wishListData = response.data
  // this._WishlistService.getWishList().subscribe({
  //   next:(response)=>{
  //     this.Products =response.data;
  //   }
  // })
  const newProductData = this.Products.filter((item:any)=> this.wishListData.includes(item._id))
  this.Products = newProductData;
      }
    })
   }
}
