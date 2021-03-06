import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleModelService } from 'src/app/vehicle-model/vehicle-model.service';
import { VehicleMakeService } from 'src/app/vehicle-make/vehicle-make.service';
import { VehicleService } from '../vehicle.service';
import { VehicleEngineService } from 'src/app/vehicle-engine/vehicle-engine.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  id:number;
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
    private route: ActivatedRoute, 
    private router: Router, 
    private vehicleService: VehicleService,
    private vehicleModelService: VehicleModelService,
    private vehicleMakeService: VehicleMakeService,
    private vehicleEngineService: VehicleEngineService) { }

  ngOnInit() {
    this.vehicle = new Vehicle();

    this.id = this.route.snapshot.params['id'];

    this.vehicleService.getVehicle(this.id)
      .subscribe(data => {
        console.log(data)
        this.vehicle = data;
        this.loadLists();
      }, error => console.log(error));
  }

  updateVehicle() {
    console.log(this.vehicle);
    this.vehicleService.updateVehicle(this.vehicle)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vehicle = new Vehicle();
    this.submitted = true;
    this.gotoList();
  }

  onSubmit() {
    this.updateVehicle();    
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
    this.vehicleMakeService.getVehicleMakeListByVehicleTypeId(this.vehicle.typeId).subscribe(data => {
      console.log(data);
      this.makeList = data;
    });
    this.vehicleModelService.getVehicleModelListByMakeId(this.vehicle.makeId).subscribe(data => {
      console.log(data);
      this.modelList = data;
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
      this.loadModelList(this.makeList[0].id);
    });
  }

  loadModelList(id: number){
    console.log('loadModelList');
    this.vehicleModelService.getVehicleModelListByMakeId(id).subscribe(data => {
      this.modelList = data;
    });
  }

}
