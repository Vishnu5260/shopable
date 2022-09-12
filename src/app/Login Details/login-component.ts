import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceComponent } from '../Services/login-service';


@Component({
    selector:'login',
    templateUrl:'./login-component.html',
    styleUrls:['./login-component.css']
})
export class LoginComponent{ 
users:any[]= [];
emailuser:string="";
passworduser:string="";
isLogin:boolean=false;
issignup:boolean=false;

constructor(private _loginservice:LoginServiceComponent) { }
user1=this._loginservice.getusers();


ngOnInit(): void {
}

LoginForm(form:NgForm){

  console.log(form);
  console.log(form.value);
 }
  onclick(){
 
   this.isLogin=this._loginservice.Validate(this.emailuser,this.passworduser);
 }
 onclicksignup(){
      this.issignup=!this.issignup;
 }

 click(){
  alert('hello');
 }
    }
    