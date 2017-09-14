import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../interfaces/customer";
import {NgProgressService} from "ngx-progressbar";
import {Router} from "@angular/router";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService,
    private progressService: NgProgressService,
    private router : Router,  private toastr: ToastsManager, 
    private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

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
        this.toastr.success('Customer deleted!', 'Success!');
        this.progressService.done();
        if(output){
          this.loadAddCustomer();
        }
      },error=>{
        this.progressService.done();
        this.toastr.error('This is not good!', 'Oops!');
        console.log(error);
      });
  }

  onEditCustomer(customer: Customer){
    this.customerService.selectedCustomer = customer;
    this.router.navigate(["edit-customer"]);
  }

}
