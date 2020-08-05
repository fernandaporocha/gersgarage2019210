import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(private vehicleService:VehicleService, private router: Router) { }
  
  vehicles: Observable<Vehicle[]>;  
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.vehicles = this.vehicleService.getVehicleList();
  }

  deleteVehicle(id: number) {  
    this.vehicleService.deleteVehicle(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.reloadData();
        },  
        error => console.log(error));  
  }  
  
  updateVehicle(id: number){
    this.router.navigate(['update-vehicle', id]);
  }

  add(){
    this.router.navigate(['add-vehicle']);
  }
}
