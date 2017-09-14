import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgProgressModule } from 'ngx-progressbar';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {CustomerService} from "../services/customer.service";
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerInputComponent } from './customer-input/customer-input.component';

export const AppRoutes: any = [
  { path: "", component: AppComponent},
  { path: "list-customer", component: CustomerListComponent},
  { path: "input-customer", component: CustomerInputComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CustomerListComponent,
    CustomerInputComponent
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
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
