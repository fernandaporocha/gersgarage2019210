import { Component, OnInit } from '@angular/core';
import { VehicleModel } from '../vehicle-model';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleModelService } from '../vehicle-model.service';
import { VehicleMakeService } from '../../vehicle-make/vehicle-make.service';

@Component({
  selector: 'app-update-vehicle-model',
  templateUrl: './update-vehicle-model.component.html',
  styleUrls: ['./update-vehicle-model.component.css']
})
export class UpdateVehicleModelComponent implements OnInit {

  id:number;
  vehicleModel: VehicleModel;
  submitted = false;
  makeId: number = null;
  makeList: any = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private vehicleModelService: VehicleModelService,
    private vehicleMakeService: VehicleMakeService) { }

  ngOnInit() {
    this.vehicleModel = new VehicleModel();

    this.id = this.route.snapshot.params['id'];

    this.loadMakeList();
    
    this.vehicleModelService.getVehicleModel(this.id)
      .subscribe(data => {
        console.log(data)
        this.vehicleModel = data;
      }, error => console.log(error));
  }

  updateVehicleModel() {
    console.log(this.vehicleModel);
    this.vehicleModelService.updateVehicleModel(this.vehicleModel)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vehicleModel = new VehicleModel();
    this.submitted = true;
    this.gotoList();
  }

  onSubmit() {
    this.updateVehicleModel();    
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
