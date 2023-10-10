import { Component } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'shared/services/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

cartId:string =''

  shippingAddress:FormGroup =new FormGroup(
    {
      details:new FormControl(null),
      phone:new FormControl(null),
      city:new FormControl(null),
    }
  )

  constructor(private _CartService:CartService,private _ActivatedRoute:ActivatedRoute){
    this._CartService.cartId.subscribe((response)=>
    {
      this.cartId=response
    })
//   this._ActivatedRoute.paramMap.subscribe((res:any)=>
//   {
// this.cartId = res.params.cartId
// console.log(this.cartId);

//   })
  }

  handleOnline(){
console.log(this.shippingAddress);
this._CartService.generateOnlinePayment(this.cartId,this.shippingAddress.value).subscribe({
  next:(response)=>{
   if (response.status == "success")
   {
    console.log(response.session.url);
    window.location.href = response.session.url
    
   }
    
  }
})
  }
}
