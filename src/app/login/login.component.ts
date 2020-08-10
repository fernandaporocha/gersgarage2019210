import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Login } from '../login';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false
  login: Login = new Login()
  authForm: FormGroup;

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
    this.loginService.authenticate(this.login);
  }

}