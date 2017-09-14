import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Product} from "../interfaces/product";
import {SearchData} from "../interfaces/searchdata";

let url : string = 'http://localhost:8080/product';

@Injectable()
export class ProductService {
    constructor(private http : Http) {}

    loadAllProduct() {
        return this
            .http
            .get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    saveProduct(product: Product){
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache' 
        });
        let options = new RequestOptions({headers: headers});
        return this.http.post(url, product, options)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    searchProduct(search: SearchData){
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache' 
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