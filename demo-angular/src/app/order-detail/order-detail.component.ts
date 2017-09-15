import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Orders} from "../../interfaces/orders";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: Orders = new Orders();

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.order = this.orderService.selectedOrder;
  }

}
