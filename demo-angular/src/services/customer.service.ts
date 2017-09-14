import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Customer} from "../interfaces/customer";

let url : string = 'http://localhost:8080/customer';

@Injectable()
export class CustomerService {

    constructor(private http : Http) {

    }

    loadAllCustomer(){  
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deleteCustomer(id) {       
        return this.http.delete(url + '/' + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    saveCustomer(customer: Customer){
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache' 
        });
        let options = new RequestOptions({headers: headers});
        return this.http.post(url, customer, options)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    updateCustomer(customer: Customer) {
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache'
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