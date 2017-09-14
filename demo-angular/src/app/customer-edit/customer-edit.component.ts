import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Customer} from "../../interfaces/customer";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";
import {NgProgressService} from "ngx-progressbar";
import {ToastsManager, Toast} from "ng2-toastr/ng2-toastr";

@Component({
  selector: 'app-customer-edit', 
  templateUrl: './customer-edit.component.html', 
  styleUrls: ['./customer-edit.component.css']})
export class CustomerEditComponent implements OnInit {

  customer : Customer;

  constructor(private customerService: CustomerService,
    private progressService: NgProgressService,
    private router : Router, private toastr: ToastsManager, 
    private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.customer = this.customerService.selectedCustomer;
  }

  onCustomerUpdate() {
    this.progressService.start();
    this.customerService.updateCustomer(this.customer).subscribe(output=>{
      this.progressService.done();
      if(output){
        this.toastr.success('Customer saved!', 'Success!', {dismiss: 'controlled'})
        .then((toast: Toast) => {
            setTimeout(() => {
              this.router.navigate(["list-customer"]);
            }, 2000);
        });        
      }
    },error=>{

    });
  }

  onCancelUpdate(){
    this.router.navigate(["list-customer"]);
  }

}
