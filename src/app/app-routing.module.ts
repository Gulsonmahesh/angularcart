import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { CreateUserComponent } from './user/create-user/create-user.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', component: UserLoginComponent},
  {path: 'newuser', component: CreateUserComponent},
  {path:'productlist', component: ProductListComponent },
  {path:'productdetail/:id', component: ProductDetailsComponent },
  {path:'**',component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
