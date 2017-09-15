import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {CustomerService} from "../../services/customer.service";
import {ProductService} from "../../services/product.service";
import {Orders} from "../../interfaces/orders";
import {Product} from "../../interfaces/product";
import {Customer} from "../../interfaces/customer";

@Component({
  selector: 'app-order-input',
  templateUrl: './order-input.component.html',
  styleUrls: ['./order-input.component.css']
})
export class OrderInputComponent implements OnInit {

  order: Orders = new Orders();
  customers: Customer[] = [];
  products: Product[] = [];

  constructor(private orderService: OrderService, 
      private customerService: CustomerService,
      private productService: ProductService) { }

  ngOnInit() {
    this.onLoadCustomer();
    this.onLoadProduct();
  }

  onLoadCustomer(){
    this.customerService.loadAllCustomer().subscribe(output=>{
      if(output){
        this.customers = output;
      }
    },error=>{
      console.log(error);
    });
  }

  onLoadProduct(){
    this.productService.loadAllProduct().subscribe(output=>{
      if(output){
        this.products = output;
      }
    },error=>{
      console.log(error);
    });
  }

  onOrderSave(){

  }

  onProductSelect(){

  }

  onProductUnSelect(){

  }

}
