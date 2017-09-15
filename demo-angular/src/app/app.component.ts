import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({selector: 'app-root', styleUrls: ['./app.component.css'], templateUrl: './app.component.html'})
export class AppComponent {

  constructor(private router : Router) {}

  ngOnInit() {
    this
      .router
      .navigate(["list-customer"]);
  }

  isLogin() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  onRegister() {
    // this
    //   .router
    //   .navigate(["register"]);
  }

  logout() {
    localStorage.clear();
    this
      .router
      .navigate(["login-account"]);
  }
}
