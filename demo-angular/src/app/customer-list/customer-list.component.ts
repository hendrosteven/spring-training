import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../interfaces/customer";
import {NgProgressService} from "ngx-progressbar";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService,
    private progressService: NgProgressService) { }

  ngOnInit() {
    this.loadAddCustomer();
  }

  loadAddCustomer(){
    this.progressService.start();
      this.customerService.loadAllCustomer()
        .subscribe(output=>{
          this.progressService.done();
          if(output){            
            console.log(output);
            this.customers = output;
          }
        },error=>{
          this.progressService.done();
          console.log(error);
        });
  }

  onDeleteCustomer(id){
    this.progressService.start();
    this.customerService.deleteCustomer(id)
      .subscribe(output=>{
        this.progressService.done();
        if(output){
          this.loadAddCustomer();
        }
      },error=>{
        this.progressService.done();
        console.log(error);
      });
  }

}
