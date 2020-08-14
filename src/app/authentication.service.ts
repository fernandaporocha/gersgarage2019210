import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { User } from './user/User';
import { Router } from '@angular/router';
import { Errors } from './errors'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedInUser: User = new User();
  showSideBar: boolean = false;
  
  errors: Errors = {errors: {}};

  constructor(private router: Router, public userService: UserService) { }

  authenticate(loginData) {    
    this.errors = {errors: {}};
    this.userService.login(loginData).subscribe(data => {
      this.loggedInUser = data;

      console.log(this.loggedInUser.name);
  
      if (this.loggedInUser === null|| this.loggedInUser === undefined || this.loggedInUser.name === undefined){
        sessionStorage.setItem('username', null);
        sessionStorage.clear();
        console.log("false");
        return false;
      }else{
        console.log("true");
        sessionStorage.setItem('username', this.loggedInUser.firstName + " " + this.loggedInUser.lastName);
        sessionStorage.setItem('role', this.loggedInUser.admin?"admin":this.loggedInUser.staff?"mechanic":"customer");
        sessionStorage.setItem('showSideBar', this.loggedInUser.admin||this.loggedInUser.staff?"true":"false");
        sessionStorage.setItem('userId', this.loggedInUser.id.toString());
        this.showSideBar = (this.loggedInUser.admin||this.loggedInUser.staff)?true:false;
        this.router.navigate([''])
        //sessionStorage.setItem('username', username);
        return true;
      }
    }, err => {
      console.log("error");
      console.log(err)
      this.errors = err;
      console.log(this.errors);
    })

  }

  getLoggedUser(){
    return this.loggedInUser;
  }

  getUsername(){
    return sessionStorage.getItem('username');
  }

  getUserId(){
    return sessionStorage.getItem('userId');
  }

  isUserLoggedIn() {
    console.log("isUserLoggedIn");
    console.log("role " +sessionStorage.getItem('role'));
    //console.log(sessionStorage.getItem('showSideBar'));
    let user = sessionStorage.getItem('username')
    console.log(user)
    return !(user === null)
  }

  getUserRole(){
    return sessionStorage.getItem('role');
  }

  sideBar(){  
    console.log("sideBar");
    console.log(sessionStorage.getItem('showSideBar'));
    if (sessionStorage.getItem('showSideBar') === null){
      return false;
    }
    let side = sessionStorage.getItem("showSideBar")=="true"?true: false; 
    console.log(side);
   
    return side;
  }

  isAdmin(){
    console.log("admin");
    console.log(sessionStorage.getItem('role'))  
    if (sessionStorage.getItem('role') === null){
      return false;
    }
    let admin = sessionStorage.getItem("role")=="admin"?true: false; 
    console.log(admin);  
    return admin;
  }

  isCustomer(){
    console.log("customer");
    console.log(sessionStorage.getItem('role'))
    if (sessionStorage.getItem('role') === null){
      return false;
    }
    let customer = sessionStorage.getItem("role")=="customer"?true: false; 
    console.log(customer);  
    return customer;
  }

  isMechanic(){
    console.log("-----mechanic");
    console.log(sessionStorage.getItem('role'))
    if (sessionStorage.getItem('role') === null){
      return false;
    }
    let mechanic = sessionStorage.getItem("role")=="mechanic"?true: false; 
    console.log(mechanic);  
    return mechanic;
  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('showSideBar')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('userId')
    sessionStorage.clear();
  }

  
}

