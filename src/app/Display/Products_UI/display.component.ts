import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { Product } from "../../Models/product";
import { MessService } from "../../service/Product_Add_Messanger/mess.service";
import { ServiceService } from "../../service/service.service";

@Component({
    selector:'dis',
    templateUrl:'./display.component.html',
    styleUrls:['display.component.css']
})
export class Displaydata{

  src:string='All products'
subject$=new Subject();
Products:any[]=[];
product:any=[]
srcProd:string=''
filter:boolean=true

    constructor(private _http:HttpClient,private _fb:FormBuilder,
      private _service:ServiceService,private msg:MessService){}

      filtersform!:FormGroup
ngOnInit(){
    
this._service.getProducts().subscribe((data:any)=>{
  this.Products=data;
});
// console.log(this.msg.wishitems)

this.msg.subject$.subscribe((data:Product[])=>{
  this.Products=data
  this.Products.forEach(e=>{
    this.srcProd=e.name

  })
  this.srcProd=''
  console.log(data)
})


this.filtersform=this._fb.group({
  from:[''],
  to:['']
});
}
send(data:Product){
  this._service.s$.next(data);
}
categorySelection1(cat:string){
  
  if(cat=='All Products')
  { this.filter=!this.filter
    this.src=cat
    this._service.getProducts().subscribe((data:Product[])=>{
    this.Products=data});

   
  }
  
   else
  {
    this.filter=false
    console.log(cat)
    this.src=cat;
    this._service.getProducts().subscribe((data:Product[])=>{
      this.Products=data.filter(x=>x.category==cat)
    })
  }
}
onSubmit(){
  console.log(this.filtersform.value);
console.log(this._service.getProducts().subscribe((data:Product[])=>{
this.Products=data.filter(x=>x.price >= this.filtersform.controls['from'].value && x.price <= this.filtersform.controls['to'].value)}))

}

}



