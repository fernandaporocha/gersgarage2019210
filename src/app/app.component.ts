import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gersgarage2019210';
  isLoggedIn = false;

  constructor (public loginService:AuthenticationService, private router: Router) { 

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd){
        this.isLoggedIn = this.loginService.isUserLoggedIn();
      }
    });
  }
}
