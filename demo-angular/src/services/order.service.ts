import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Orders} from "../interfaces/orders";

let url : string = 'http://localhost:8080/order';

@Injectable()
export class OrderService {

    selectedOrder: Orders;
    
    constructor(private http : Http) {}

    loadAllOrder() {
        return this
            .http
            .get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    saveOrder(orders: Orders){
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache' 
        });
        let options = new RequestOptions({headers: headers});
        return this.http.post(url, orders, options)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    searchOrderByCustomer(customerId){     
        return this.http.get(url + "/customer/"+ customerId)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
} 