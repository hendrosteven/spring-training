import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../interfaces/customer";
import {NgProgressService} from "ngx-progressbar";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css']
})
export class CustomerInputComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, 
      private progressService: NgProgressService,
      private toastr: ToastsManager, 
      private vcr: ViewContainerRef) { 

      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  onCustomerSave(){
    this.progressService.start();
    this.customerService.saveCustomer(this.customer)
        .subscribe(output=>{
          this.progressService.done();
          console.log(output);
          this.customer = new Customer();
          this.toastr.success('Customer saved!', 'Success!');
        },error=>{
          this.progressService.done();
          console.log(error);
          this.toastr.error('This is not good!', 'Oops!');
        });
  }


}
