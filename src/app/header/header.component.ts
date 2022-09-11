import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Models/product';
import { MessService } from '../service/Product_Add_Messanger/mess.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private  _msgser : MessService,private _productsService:ServiceService) { }

  ngOnInit(): void {
     this._msgser.cartitems.forEach((item:any)=>{
    this.totalItem +=item.qty
    console.log(this._msgser.cartitems.length)
   });
   
   
  }
  submit(searchform:NgForm){

    console.log(searchform.form.controls['search'].value)
  if(this._productsService.getProducts().subscribe((data:Product[])=>{data.find((x=>x.name===searchform.form.controls['search'].value))}))
  {  
    this._msgser.serach(this._productsService.getProducts().subscribe((data:Product[])=>{
      data.find((x=>x.name===searchform.form.controls['search'].value)
      )}));
    }
      else{
        alert('not founf')
      }
}}


    // this._productsService.getProducts().subscribe((data:any)=>{
    //   data.find((x: { name: string; })=>x.name===this.searchTerm))}
  
  

  

