import { Component, OnInit } from '@angular/core';
import { VehicleMakeService } from '../vehicle-make.service';
import { VehicleMake } from '../vehicle-make';
import { Subject, Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-make-list',
  templateUrl: './vehicle-make-list.component.html',
  styleUrls: ['./vehicle-make-list.component.css']
})
export class VehicleMakeListComponent implements OnInit {

  constructor(private vehicleMakeService:VehicleMakeService, private router: Router) { }
  
  vehicleMakes: Observable<VehicleMake[]>;  
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.vehicleMakes = this.vehicleMakeService.getVehicleMakeList();
  }

  deleteVehicleMake(id: number) {  
    this.vehicleMakeService.deleteVehicleMake(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.reloadData();
        },  
        error => console.log(error));  
  }  
  
  updateVehicleMake(id: number){
    this.router.navigate(['update-vehicle-make', id]);
  }

  add(){
    this.router.navigate(['add-vehicle-make']);
  }

}
