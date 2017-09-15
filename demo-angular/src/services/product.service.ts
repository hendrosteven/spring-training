import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Product} from "../interfaces/product";
import {SearchData} from "../interfaces/searchdata";

let url : string = 'https://springdemo-jpa.herokuapp.com/product';

@Injectable()
export class ProductService {
    constructor(private http : Http) {}

    loadAllProduct() {
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

    saveProduct(product: Product){
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this.http.post(url, product, options)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    searchProduct(search: SearchData){
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this.http.post(url + "/search", search, options)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}