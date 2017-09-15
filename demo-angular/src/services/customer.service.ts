import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Customer} from "../interfaces/customer";

let url : string = 'https://springdemo-jpa.herokuapp.com/customer';

@Injectable()
export class CustomerService {

    selectedCustomer: Customer;

    constructor(private http : Http) {

    }

    loadAllCustomer(){  
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this.http.get(url, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deleteCustomer(id) {       
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this.http.delete(url + '/' + id, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    saveCustomer(customer: Customer){
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this.http.post(url, customer, options)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    updateCustomer(customer: Customer) {
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this.http.put(url, customer, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}