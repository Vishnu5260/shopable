import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CartItemModule } from './cart/cart-item.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductApiService } from './service/InBuild_Web_Api/apiservice.service';
import { MessService } from './service/Product_Add_Messanger/mess.service';
import { ServiceService } from './service/service.service';
import { DisplayModule } from './Display/display.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,CartItemModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    DisplayModule,
  HttpClientInMemoryWebApiModule.forRoot(ProductApiService),HttpClientModule

  ],
  providers: [ServiceService,MessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
