import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false
  login: Login = new Login()

  constructor(private router: Router,
    private loginService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    console.log("checklogin")
    console.log(this.login)
    this.loginService.authenticate(this.login);
    //if (this.loginService.isUserLoggedIn()) {
    //  this.router.navigate([''])
    //  this.invalidLogin = false
    //} else
    //  this.invalidLogin = true
  }

  onSubmit(){
    console.log("submit")
    console.log(this.login)
    this.loginService.authenticate(this.login);
  }

}