import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../User';
import { ContactDetails } from '../contact-details';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    public loginService: AuthenticationService) { }

  user: User = new User();
  contact: Observable<ContactDetails[]>;
  submitted = false;
  isStaff = false;
  isAdmin = false;
  isActive = true;

  ngOnInit(): void {
    this.user.contactDetails = new ContactDetails();
    this.user.active = true;
  }

  save(){
    console.log('save - user');
    console.log(this.user);
    this.contact = this.userService.createContactInfor(this.user.contactDetails);
    //const va = this.userService.createContactInfor(this.user.contact);
    //va.subscribe
    
    console.log(this.contact);
    console.log('contact');
    this.userService.createUser(this.user)
    .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  saveContactInfo(){
    return this.userService.createContactInfor(this.user.contactDetails)
    .subscribe(data => {
      console.log(data);
      return data;
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/view-user']);
  }

}
