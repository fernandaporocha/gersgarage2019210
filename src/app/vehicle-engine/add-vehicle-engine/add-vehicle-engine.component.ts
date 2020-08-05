import { Component, OnInit } from '@angular/core';
import { VehicleEngineService } from '../vehicle-engine.service';
import { FormControl,FormGroup,Validators } from '@angular/forms'; 
import { VehicleEngine } from '../vehicle-engine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle-engine',
  templateUrl: './add-vehicle-engine.component.html',
  styleUrls: ['./add-vehicle-engine.component.css']
})
export class AddVehicleEngineComponent implements OnInit {

  constructor(private vehicleEngineService:VehicleEngineService,
    private router:Router) { }

  vehicleEngine: VehicleEngine = new VehicleEngine();
  submitted = false;

  ngOnInit(): void {
  }

  save(){
    this.vehicleEngineService.createVehicleEngine(this.vehicleEngine)
    .subscribe(data => console.log(data), error => console.log(error));
    this.vehicleEngine = new VehicleEngine();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/view-vehicle-engine']);
  }

}
