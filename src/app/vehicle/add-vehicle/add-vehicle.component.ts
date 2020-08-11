import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';
import { VehicleModelService } from 'src/app/vehicle-model/vehicle-model.service';
import { VehicleMakeService } from 'src/app/vehicle-make/vehicle-make.service';
import { VehicleEngineService } from 'src/app/vehicle-engine/vehicle-engine.service';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  submitted = false;
  makeId: number = null;
  makeList: any = [];
  modelId: number = null;
  modelList: any = [];
  engineId: number = null;
  engineList: any = [];
  typeId: number = null;
  typeList: any = [];

  constructor(
    private vehicleService: VehicleService,
    private vehicleModelService: VehicleModelService,
    private vehicleMakeService: VehicleMakeService,
    private vehicleEngineService: VehicleEngineService,
    private router: Router) { }

  ngOnInit() {
    this.loadLists();
  }

  save() {
    if (sessionStorage.getItem('role')==="customer"){
      this.vehicle.customerId= parseInt(sessionStorage.getItem("userId"));
    }
    this.vehicleService.createVehicle(this.vehicle)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vehicle = new Vehicle();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/view-vehicle']);
  }

  loadLists(){
    this.vehicleEngineService.getVehicleEngineList().subscribe(data => {
      this.engineList = data;
    });
    this.vehicleService.getVehicleTypeList().subscribe(data => {
      this.typeList = data;
    });
  }

  onMakeChange(makeId) {
    this.loadModelList(makeId);
  }

  onTypeChange(typeId) {
    this.loadMakeList(typeId);
  }

  loadMakeList(id: number){
    console.log('loadMakeList');
    this.vehicleMakeService.getVehicleMakeListByVehicleTypeId(id).subscribe(data => {
      console.log(data);
      this.makeList = data;
    });
  }

  loadModelList(id: number){
    console.log('loadModelList');
    this.vehicleModelService.getVehicleModelListByMakeId(id).subscribe(data => {
      this.modelList = data;
    });
  }


}
