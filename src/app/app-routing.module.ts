import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cartitemcomponent } from './cart/cart-item/cart-item.component';

const routes: Routes = [
  {path:'cart',component:cartitemcomponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
