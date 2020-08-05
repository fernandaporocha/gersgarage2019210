import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleModelService } from '../vehicle-model.service';
import { VehicleModel } from '../vehicle-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicle-model-list',
  templateUrl: './vehicle-model-list.component.html',
  styleUrls: ['./vehicle-model-list.component.css']
})
export class VehicleModelListComponent implements OnInit {

  constructor(private vehicleModelService:VehicleModelService, private router: Router) { }
  
  vehicleModels: Observable<VehicleModel[]>;  
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.vehicleModels = this.vehicleModelService.getVehicleModelList();
  }

  deleteVehicleModel(id: number) {  
    this.vehicleModelService.deleteVehicleModel(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.reloadData();
        },  
        error => console.log(error));  
  }  
  
  updateVehicleModel(id: number){
    this.router.navigate(['update-vehicle-model', id]);
  }

  add(){
    this.router.navigate(['add-vehicle-model']);
  }

}
