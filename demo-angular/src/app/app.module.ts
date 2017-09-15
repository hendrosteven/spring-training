import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgProgressModule } from 'ngx-progressbar';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import {CustomerService} from "../services/customer.service";
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerInputComponent } from './customer-input/customer-input.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import {CategoryService} from "../services/category.service";
import {ProductService} from "../services/product.service";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInputComponent } from './product-input/product-input.component';
import {OrderService} from "../services/order.service";
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderInputComponent } from './order-input/order-input.component';

export const AppRoutes : any = [
  { path: "", component: AppComponent},
  { path: "list-customer", component: CustomerListComponent},
  { path: "input-customer", component: CustomerInputComponent},
  { path: "edit-customer", component: CustomerEditComponent},
  { path: "list-product", component: ProductListComponent},
  { path: "input-product", component: ProductInputComponent},
  { path: "list-order", component: OrderListComponent},
  { path: "detail-order", component: OrderDetailComponent},
  { path: "input-order", component: OrderInputComponent}
];

@NgModule({
  declarations: [
    AppComponent,   
    CustomerListComponent,
    CustomerInputComponent,
    CustomerEditComponent,
    ProductListComponent,
    ProductInputComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderInputComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgProgressModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(AppRoutes,{useHash: true}),
  ],
  providers: [
    CustomerService, 
    CategoryService, 
    ProductService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
