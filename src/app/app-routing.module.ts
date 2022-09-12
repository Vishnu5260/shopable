import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login Details/login-component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './Signup Details/create-signup';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
 
  {path:'logout',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
