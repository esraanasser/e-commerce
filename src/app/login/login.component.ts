import { Component } from '@angular/core';
import {FormGroup , FormControl ,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService ,private _Router:Router)
  {
    if(localStorage.getItem("userToken")!== null)
    {
      _Router.navigate(['/home'])
    }
  }
  isLoading:boolean=false;
  apiError:string='';
  loginForm:FormGroup =new FormGroup({
    email:new FormControl(null,[Validators.required ,Validators.email]),
    password:new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  });
  
  handellogin(loginForm:FormGroup)
  {
    this.isLoading = true;
  if (loginForm.valid)
  {
    //login
  this._AuthService.login(loginForm.value).subscribe({
    next:(response)=> {
      if (response.message === 'success')
      {
        this.isLoading = false;
        localStorage.setItem('userToken' , response.token);
        this._AuthService.decodeUserData();
        this._Router.navigate(['/home'])
        //navigate login 
      }
    },
    error:(err)=>{
      this.isLoading = false;
      this.apiError = err.error.message;
      console.log(err)
    }
    
  })
  
  }
   console.log(loginForm );
   
  }
}
