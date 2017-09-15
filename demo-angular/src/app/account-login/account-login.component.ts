import { Component, OnInit } from '@angular/core';
import {Login} from "../../interfaces/login";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
import {Md5} from 'ts-md5/dist/md5';


@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  onProcessLogin(){
    this.accountService.login(this.login).subscribe(output=>{
      if(output){
        let hash = Md5.hashStr(this.login.password).toString();
        let token = btoa(this.login.username + ':' + hash);
        localStorage.setItem('token',token);  
        console.log('Token: ' + localStorage.getItem('token'));      
        this.router.navigate(["list-customer"]);    
      }else{
        console.log("Login fail");
      }
    },error=>{
      console.log(error);
    });
  }

}
