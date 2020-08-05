import { Component, OnInit } from '@angular/core';
import { VehicleEngineService } from '../vehicle-engine.service';
import { VehicleEngine } from '../vehicle-engine';
import { Observable, Subject } from "rxjs";

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-engine-list',
  templateUrl: './vehicle-engine-list.component.html',
  styleUrls: ['./vehicle-engine-list.component.css']
})
export class VehicleEngineListComponent implements OnInit {

  constructor(private vehicleEngineService:VehicleEngineService,
    private router: Router) { }

  vehicleEngines: Observable<VehicleEngine[]>;
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.vehicleEngines = this.vehicleEngineService.getVehicleEngineList();
  }
    
  deleteVehicleEngine(id: number) {  
    this.vehicleEngineService.deleteVehicleEngine(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.reloadData();  
        },  
        error => console.log(error));  
  }  
  
  updateVehicleEngine(id: number){  
    this.router.navigate(['update-vehicle-engine', id])
  }

  add(){
    this.router.navigate(['add-vehicle-engine']);
  }
}  
