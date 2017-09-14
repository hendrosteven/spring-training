import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  data: string[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.loadAllCustomer()
        .subscribe(output=>{
          console.log(output);
        },error=>{
          console.log(error);
        });
  }

}
