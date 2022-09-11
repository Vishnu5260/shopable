import {Component, Injectable} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class LoginServiceComponent {

 constructor(private _router:Router){

 }
users:any[]=[
  {useremail:"admin",userpassword:"admin"},

]
Validate(email:string,password:string){
  if(email==this.users[0].useremail && password==this.users[0].userpassword){
      return true;
  }
    else{
     alert("enter valid credentials");
       return false;
    }
}

getusers():any[] {
  return this.users;
}

}