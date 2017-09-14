import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../interfaces/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadAddCustomer();
  }

  loadAddCustomer(){
      this.customerService.loadAllCustomer()
        .subscribe(output=>{
          if(output){
            console.log(output);
            this.customers = output;
          }
        },error=>{
          console.log(error);
        });
  }

  onDeleteCustomer(id){
    this.customerService.deleteCustomer(id)
      .subscribe(output=>{
        if(output){
          this.loadAddCustomer();
        }
      },error=>{
        console.log(error);
      });
  }

}
