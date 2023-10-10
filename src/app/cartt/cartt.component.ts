import { Component, OnInit } from '@angular/core';
import { CartService } from 'shared/services/cart.service';
import { Cart } from '../cartt/interface/cart';
import {  ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-cartt',
  templateUrl: './cartt.component.html',
  styleUrls: ['./cartt.component.css'],

})
export class CarttComponent implements OnInit {
  cartDetails:Cart= {} as Cart
  constructor(private _CartService:CartService,
    private _ToastrService:ToastrService)
  {

  }
ngOnInit(): void {
  this.getCart()
}
getCart(){
  this._CartService.getCart().subscribe({
    next:(response)=>{
this.cartDetails =response
console.log(this.cartDetails);

    }
  })
}
updateCount(count:number,id:string){
  this._CartService.updateProductCount(count,id).subscribe({
    next:(response)=>{
      this.cartDetails=response
    }
  })
}
deletItem(id:string)
{
this._CartService.removeproduct(id).subscribe({
  next:(response)=>{
    this._ToastrService.success("product removed from cart")
    console.log(response);
    this.cartDetails=response
  }
})
}
}
