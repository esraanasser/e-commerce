import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { ProductService } from '../product.service';
import { CartService } from 'shared/services/cart.service';
import { WishlistService } from '../wishlist.service';
import { ToastrService } from 'ngx-toastr';






@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  Products:Product[]=[];
  searchTerm:string=''; 
  wishListData:string[]=[];
  constructor(private _ProductService:ProductService,
    private _CartService:CartService,
    private _WishlistService:WishlistService ,
    private _ToastrService:ToastrService
    )
  {}
  ngOnInit(): void {
    this._ProductService.getProuducts().subscribe({
      next:(response)=>this.Products = response.data 
    })

    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
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
          this._ToastrService.success(response.message)
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

    }
  })
 }
}
