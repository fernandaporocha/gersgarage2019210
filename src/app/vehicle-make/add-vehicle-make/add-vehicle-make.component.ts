import { Component, OnInit } from '@angular/core';
import { VehicleMakeService } from '../vehicle-make.service';
import { Router } from '@angular/router';
import { VehicleMake } from '../vehicle-make';

@Component({
  selector: 'app-add-vehicle-make',
  templateUrl: './add-vehicle-make.component.html',
  styleUrls: ['./add-vehicle-make.component.css']
})
export class AddVehicleMakeComponent implements OnInit {

  constructor(private vehicleMakeService:VehicleMakeService,
    private router:Router) { }

  vehicleMake: VehicleMake = new VehicleMake();
  submitted = false;

  ngOnInit(): void {
  }

  save(){
    this.vehicleMakeService.createVehicleMake(this.vehicleMake)
    .subscribe(data => console.log(data), error => console.log(error));
    this.vehicleMake = new VehicleMake();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/view-vehicle-make']);
  }

}
