import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { User } from './user/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedInUser: User = new User();
  constructor(private router: Router, public userService: UserService) { }

  authenticate(loginData) {    
    this.userService.login(loginData).subscribe(data => {
      this.loggedInUser = data;
  
      if (this.loggedInUser === null|| this.loggedInUser === undefined || this.loggedInUser.name === undefined){
        sessionStorage.setItem('username', null);
        sessionStorage.clear();
        return false;
      }else{
        sessionStorage.setItem('username', this.loggedInUser.firstName + " " + this.loggedInUser.lastName);
        sessionStorage.setItem('role', this.loggedInUser.admin?"admin":this.loggedInUser.staff?"mechanic":"customer");
        sessionStorage.setItem('userId', this.loggedInUser.id.toString());
        this.router.navigate([''])
        return true;
      }
    });
  }

  getUsername(){
    return sessionStorage.getItem('username');
  }

  getUserId(){
    return sessionStorage.getItem('userId');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  isAdmin(){
    if (sessionStorage.getItem('role') === null){
      return false;
    }
    let admin = sessionStorage.getItem("role")=="admin"?true: false; 
    return admin;
  }

  isCustomer(){
    if (sessionStorage.getItem('role') === null){
      return false;
    }
    let customer = sessionStorage.getItem("role")=="customer"?true: false; 
    return customer;
  }

  isMechanic(){
    if (sessionStorage.getItem('role') === null){
      return false;
    }
    let mechanic = sessionStorage.getItem("role")=="mechanic"?true: false; 
    return mechanic;
  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('userId')
    sessionStorage.clear();
  }
}

