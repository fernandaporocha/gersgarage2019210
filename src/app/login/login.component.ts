import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Login } from '../login';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Errors } from '../errors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false
  login: Login = new Login()
  authForm: FormGroup;
  errors: Errors = {errors: {}};

  constructor(private router: Router,
    private loginService: AuthenticationService,
    private fb: FormBuilder) { 
      // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
    }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submit")
    console.log(this.login)
    this.authenticate(this.login);
  }

  authenticate(loginData) {
    //authenticate(username: string, password: string) {
      
      this.errors = {errors: {}};
      
      this.loginService.userService.login(loginData).subscribe(data => {
    
        if (this.loginService.loggedInUser === null|| this.loginService.loggedInUser === undefined || this.loginService.loggedInUser.name === undefined){
          sessionStorage.setItem('username', null);
          sessionStorage.clear();
          console.log("false");
          return false;
        }else{
          console.log("true");
          sessionStorage.setItem('username', this.loginService.loggedInUser.firstName + " " + this.loginService.loggedInUser.lastName);
          sessionStorage.setItem('role', this.loginService.loggedInUser.admin?"admin":this.loginService.loggedInUser.staff?"staff":"customer");
          sessionStorage.setItem('showSideBar', this.loginService.loggedInUser.admin||this.loginService.loggedInUser.staff?"true":"false");
          sessionStorage.setItem('userId', this.loginService.loggedInUser.id.toString());
          this.loginService.showSideBar = (this.loginService.loggedInUser.admin||this.loginService.loggedInUser.staff)?true:false;
          this.router.navigate([''])
          //sessionStorage.setItem('username', username);
          return true;
        }
      }, err => {
        console.log("error");
        console.log(err)
        this.errors = err;
      })
  
    }

}