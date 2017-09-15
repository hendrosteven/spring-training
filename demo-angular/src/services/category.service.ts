import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Category} from "../interfaces/category";

let url : string = 'https://springdemo-jpa.herokuapp.com/category';

@Injectable()
export class CategoryService {

    constructor(private http : Http) {}

    loadAllCategory(){  
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
    
    handleError(error) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}