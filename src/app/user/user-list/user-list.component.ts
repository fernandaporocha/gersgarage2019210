import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService,
    private router: Router) { }

  users: Observable<User[]>;
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    console.log("reloadData");
    this.users = this.userService.getUserList();
  }
    
  deleteUser(id: number) {  
    this.userService.deleteUser(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.reloadData();  
        },  
        error => console.log(error));  
  }  
  
  updateUser(id: number){  
    this.router.navigate(['update-user', id])
  }

  add(){
    this.router.navigate(['add-user']);
  }

  printRole(user:User){
    if(user.admin && user.staff){
        return "Admin/Staff";
    }else if(user.admin){
        return "Admin";
    }else if(user.staff){
        return "Staff";
    }else{
        return "Customer";
    }
}

}
