import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Orders} from "../../interfaces/orders";
import {Customer} from "../../interfaces/customer";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Orders[] = [];
  customers: Customer[] = [];
  selectedCustomer: any;

  constructor(private orderService: OrderService,
          private customerService: CustomerService,
          private router : Router) { }

  ngOnInit() {
    this.onLoadOrders();
    this.onLoadCustomers();
  }

  onSelectedOrder(order: Orders){
    this.orderService.selectedOrder = order;
    this.router.navigate(["detail-order"]);
  }

  onSelectedCustomer(){   
    if(this.selectedCustomer!=='false'){
      this.loadOrderByCustomer(this.selectedCustomer.id);
    }else{
      this.onLoadOrders();
    }
  }

  loadOrderByCustomer(customerId){
    this.orderService.searchOrderByCustomer(customerId)
        .subscribe(output=>{
          this.orders = output;
        },error=>{
          console.log(error);
        });
  }

  onLoadOrders(){
    this.orderService.loadAllOrder().subscribe(output=>{
      if(output){
        console.log(output);
        this.orders = output;
      }
    },error=>{
      console.log(error);
    });
  }

  onLoadCustomers(){
    this.customerService.loadAllCustomer().subscribe(output=>{
      if(output){
        this.customers = output;
      }
    },error=>{
      console.log(error);
    });
  }

}
