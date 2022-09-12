import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cartitemcomponent } from './cart/cart-item/cart-item.component';
import { Displaydata } from './Display/Products_UI/display.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './Login Details/login-component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './Signup Details/create-signup';


const routes: Routes = [
  {path:'cart',component:cartitemcomponent},
  {path:'signup',component:SignupComponent},
  {path:'logout',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:Displaydata},
  {path:'login',component:LoginComponent},
  {path:'**',component:Displaydata},
  // {path:'',redirectTo:'login',pathMatch:'full'},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
