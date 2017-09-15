import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {CustomerService} from "../../services/customer.service";
import {ProductService} from "../../services/product.service";
import {Orders} from "../../interfaces/orders";
import {Product} from "../../interfaces/product";
import {Customer} from "../../interfaces/customer";
import {OrderItem} from "../../interfaces/order-item";
import {Router} from "@angular/router";

@Component({selector: 'app-order-input', templateUrl: './order-input.component.html', styleUrls: ['./order-input.component.css']})
export class OrderInputComponent implements OnInit {

  order : Orders = new Orders();
  customers : Customer[] = [];
  products : Product[] = [];
  total: number = 0;

  constructor(private orderService : OrderService, 
    private customerService : CustomerService, 
    private productService : ProductService,
    private router : Router) {}

  ngOnInit() {
    this.order.items = [];
    this.onLoadCustomer();
    this.onLoadProduct();    
  }

  onLoadCustomer() {
    this
      .customerService
      .loadAllCustomer()
      .subscribe(output => {
        if (output) {
          this.customers = output;
        }
      }, error => {
        console.log(error);
      });
  }

  onLoadProduct() {
    this
      .productService
      .loadAllProduct()
      .subscribe(output => {
        if (output) {
          this.products = output;
        }
      }, error => {
        console.log(error);
      });
  }

  onOrderSave() {
    this.orderService.saveOrder(this.order).subscribe(output=>{
      console.log(output);
      this.router.navigate(["list-order"]);
    },error=>{

    });
  }

  onProductSelect(product : Product) {
    //remove selected product from product list
    this.products = this.products.filter(result=>{
      return result.id !== product.id;
    })  
    //add as item
    let item : OrderItem = new OrderItem();
    item.price = product.price;
    item.quantity = 1;
    item.product = product;
    this.order.items.push(item);
  }

  onProductUnSelect(item: OrderItem) {    
    this.order.items = this.order.items.filter(result=>{
      return result.product.id !== item.product.id;
    });
  }

  getTotal(){
    let total: number = 0;
    this.order.items.forEach(item => {
      total +=  item.quantity*item.price;
    });
    return total;
  }
}
