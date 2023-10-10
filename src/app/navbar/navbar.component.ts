import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from 'shared/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  numOfCartItems:number=0;
isLogin:boolean =false;
logOut()
{
  this._AuthService.logOut();
}
constructor(private _AuthService:AuthService,
  private _CartService:CartService)
{
_AuthService.userData.subscribe(
  {
next:()=>{
  if(_AuthService.userData.getValue() !== null){
    this.isLogin = true
  }
  else
  {
    this.isLogin = false
  }
}

  }
)
this._CartService.numOfCartItems.subscribe((response)=>{
  console.log("changing");
  
  this.numOfCartItems = response
})

}

}
