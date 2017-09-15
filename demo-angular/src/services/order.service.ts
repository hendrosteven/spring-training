import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Orders} from "../interfaces/orders";

let url : string = 'https://springdemo-jpa.herokuapp.com/order';

@Injectable()
export class OrderService {

    selectedOrder: Orders;
    
    constructor(private http : Http) {}

    loadAllOrder() {
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .get(url,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    saveOrder(orders: Orders){
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this.http.post(url, orders, options)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    searchOrderByCustomer(customerId){  
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});   
        return this.http.get(url + "/customer/"+ customerId, options)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
} 