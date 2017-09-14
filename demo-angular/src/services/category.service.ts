import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Category} from "../interfaces/category";

let url : string = 'http://localhost:8080/category';

@Injectable()
export class CategoryService {

    constructor(private http : Http) {}

    loadAllCategory(){  
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    handleError(error) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
}