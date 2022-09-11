import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashBoardComponent } from './Dashboard/dashboard-component';
import { LoginComponent } from './Login Details/login-component';
import { LoginServiceComponent } from './Services/login-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './Signup Details/create-signup';

@NgModule({
  declarations: [
    AppComponent ,DashBoardComponent,LoginComponent,SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
