import {Customer} from "./customer";
import {OrderItem} from "./order-item";

export class Orders {
    id : number;
    orderDate: any;
    customer: Customer;
    items: OrderItem[];
}