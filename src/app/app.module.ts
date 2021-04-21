import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CartComponent } from './shopping/cart/cart.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './layout/header/header.component';
import { NumberonlyDirective } from './directive/numberonly.directive';
import { CheckoutComponent } from './shopping/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CreateUserComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    PagenotfoundComponent,
    HeaderComponent,
    NumberonlyDirective,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
