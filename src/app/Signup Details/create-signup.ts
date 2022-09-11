import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



@Component({
  selector: 'signup-selector',
  templateUrl: './create-signup.html',
  styleUrls:['create-signup.css']
})
export class SignupComponent implements OnInit{

   SignupForm!:FormGroup 
   hide=true;

    //  ngOnInit(): void {
//         this.personForm = new FormGroup({  // use instance of the form group to fill the fprm control 
         
//             Fname:new FormControl(),  
//             Lname:new FormControl(),
//             Email:new FormControl(),
//             CreatePassword:new FormControl(),
//             ConfirmPassword:new FormControl(),

            

//         });
    //  }
    Register(){
        console.log(this.SignupForm);
        console.log(this.SignupForm.value);
      
        // console.log(this.personForm.get('Fname'));
        // console.log(this.personForm.get('Fname')!.errors);
       // console.log(this.personForm.get('Fname')!.errors!['min']);
    }
       Upload(){
        // this.personForm.setValue({
        //     Fname:'Rajat',
        //     Lname:'Singh',
        //     Email:'rajatkshatriya38@gmail.com',
        //     CreatePassword:'Rajat@9125',
        //     //ConfirmPassword:'Rajat@9125'
        // })
        // 
        this.SignupForm.patchValue({
            Fname:'Rajat',
            Lname:'Singh',
            Email:'rajatkshatriya38@gmail.com',
            CreatePassword:'Rajat@9125',
            ConfirmPassword:'Rajat@9125'
           
        
        })
     }

   // 2nd way to implement that above functionality through FormBuilder because minimize the line of code 

   constructor( private _formBuilder:FormBuilder){

}
   ngOnInit(): void {

    this.SignupForm=this._formBuilder.group({
                    Fname: ['',[Validators.required]],
                    Lname:['',[Validators.required]],
                    Email:['',[Validators.required]],
                    CreatePassword:['',[Validators.required]],
                    ConfirmPassword:['',[Validators.required]],
                    Gender:['',Validators.required]
                    
    
    })

   //  this._val[0]=this.CreatePassword
      

   }
  
}
