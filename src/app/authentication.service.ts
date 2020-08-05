import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { User } from './user/User';
import { Router } from '@angular/router';
import { timers } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedInUser: User = new User();
  showSideBar: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  authenticate(loginData) {
  //authenticate(username: string, password: string) {
    console.log("authenticate");
    console.log(loginData);
    this.userService.login(loginData).subscribe(data => {
      this.loggedInUser = data;

      console.log("this.loggedInUser");
      console.log(this.loggedInUser);
      console.log(this.loggedInUser.name);
  
      if (this.loggedInUser === null|| this.loggedInUser === undefined || this.loggedInUser.name === undefined){
        sessionStorage.setItem('username', null);
        localStorage.clear();
        sessionStorage.clear();
        console.log("false");
        return false;
      }else{
        console.log("true");
        sessionStorage.setItem('username', loginData.username);
        sessionStorage.setItem('role', this.loggedInUser.admin?"admin":this.loggedInUser.staff?"staff":"customer");
        sessionStorage.setItem('showSideBar', this.loggedInUser.admin||this.loggedInUser.staff?"true":"false");
        sessionStorage.setItem('userId', this.loggedInUser.id.toString());
        this.showSideBar = (this.loggedInUser.admin||this.loggedInUser.staff)?true:false;
        console.log("showSideBar");
        console.log(this.showSideBar);
        console.log(this.loggedInUser)
        console.log("this.loggedInUser.isAdmin");
        console.log(this.loggedInUser.admin);
        console.log(this.loggedInUser.name);
        this.router.navigate([''])
        //sessionStorage.setItem('username', username);
        return true;
      }
    })

  }

  getLoggedUser(){
    return this.loggedInUser;
  }

  getUsername(){
    return this.loggedInUser.firstName + " " + this.loggedInUser.lastName;
  }

  isUserLoggedIn() {
    //console.log("isUserLoggedIn");
    //console.log(sessionStorage.getItem('role'));
    //console.log(sessionStorage.getItem('showSideBar'));
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
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

  /*showSideBar() {
    let show = sessionStorage.getItem('username')
    console.log("showSideBar");
    console.log(show === "true");
    return (show === "true");
  }*/

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('showSideBar')
    sessionStorage.removeItem('role')
    sessionStorage.clear();
  }

  
}

