import { Component, OnInit } from '@angular/core';
import { VehicleModelService } from '../vehicle-model.service';
import { Router } from '@angular/router';
import { VehicleModel } from '../vehicle-model';
import { VehicleMakeService } from '../../vehicle-make/vehicle-make.service';

@Component({
  selector: 'app-add-vehicle-model',
  templateUrl: './add-vehicle-model.component.html',
  styleUrls: ['./add-vehicle-model.component.css']
})
export class AddVehicleModelComponent implements OnInit {

  constructor(
    private vehicleModelService: VehicleModelService,
    private vehicleMakeService: VehicleMakeService,
    private router:Router) { }

  vehicleModel: VehicleModel = new VehicleModel();
  submitted = false;
  makeId: number = null;
  makeList: any = [];

  ngOnInit(): void {
    this.loadMakeList();
  }

  save(){
    console.log(this.makeId);
    console.log('save - angular');
    this.vehicleModelService.createVehicleModel(this.vehicleModel)
    .subscribe(data => console.log(data), error => console.log(error));
    this.vehicleModel = new VehicleModel();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/view-vehicle-model']);
  }

  loadMakeList(){
    this.vehicleMakeService.getVehicleMakeList().subscribe(data => {
      this.makeList = data;
    });
  }
}
