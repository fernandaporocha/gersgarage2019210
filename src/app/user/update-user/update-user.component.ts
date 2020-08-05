import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { ContactDetails } from '../contact-details';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id:number;
  user: User;
  contact: ContactDetails;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router:Router,
    public loginService:AuthenticationService ) { }

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  updateUser() {
    console.log("update");
    console.log(this.user);
    this.userService.updateUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.submitted = true;
    this.gotoList();
  }

  onSubmit() {
    this.updateUser();    
  }

  gotoList() {
    this.router.navigate(['/view-user']);
  }

}
