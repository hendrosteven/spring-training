import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Md5} from 'ts-md5/dist/md5';
import {Login} from "../interfaces/login";

let url : string = 'https://springdemo-jpa.herokuapp.com/account';

@Injectable()
export class AccountService{

    constructor(private http : Http) {}

    register(account) {
        account.password = Md5.hashStr(account.password).toString();
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache'
        });
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(url + '/register', account, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    login(login: Login){
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache'            
        });
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(url+'/login', login, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {        
        return Observable.throw(error.json() || 'Server error');
    }
}