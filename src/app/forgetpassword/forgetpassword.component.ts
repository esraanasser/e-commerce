import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetpassService } from '../forgetpass.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  email:string='';
  userMsg:string='';
constructor(private _ForgetpassService:ForgetpassService,
  private _Router:Router){




}




  forgetform:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required ,Validators.email])
  })
  resetcodeform:FormGroup = new FormGroup({
    resetCode:new FormControl('',[Validators.required])
  })
  Resetpasswordform:FormGroup = new FormGroup({
    newPassword:new FormControl('',[Validators.required ,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)])
  })

  forgetpassword():void{
    let useremail =this.forgetform.value;
this.email =useremail.email;


this._ForgetpassService.forgetpassword(useremail).subscribe({
next:(response)=>{
  console.log(response);
  this.userMsg =response.message
  this.step1=false;
  this.step2=true;
  
},
error:(err)=>{
  this.userMsg = err.error.message;
  console.log(this.userMsg);
  
},
})
  }
resetCode():void{
  let resetCode =  this.resetcodeform.value;
 
  console.log(resetCode);
  
 this._ForgetpassService.resetCode(resetCode).subscribe({
  next:(response)=>{
    console.log(response ,"from code reset");
    this.userMsg =response.status;
    this.step2 = false;
    this.step3 = true;
    
  },
  error:(err)=>{
    this.userMsg = err.error.message;
  }
})
}

newpassword():void{
  let resetForm = this.Resetpasswordform.value;
  resetForm.email = this.email;


  this._ForgetpassService.resetPassword(resetForm).subscribe({
    next:(response)=>{
console.log(response);
if(response.token){
  localStorage.setItem('userToken',response.token);
  this._Router.navigate(['/home'])
}

    }, error:(err)=>{
      this.userMsg = err.error.message;
    }
  })
}
}
