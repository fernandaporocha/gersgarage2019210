import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleEngine } from '../vehicle-engine';
import { VehicleEngineService } from '../vehicle-engine.service';

@Component({
  selector: 'app-update-vehicle-engine',
  templateUrl: './update-vehicle-engine.component.html',
  styleUrls: ['./update-vehicle-engine.component.css']
})
export class UpdateVehicleEngineComponent implements OnInit {

  id:number;
  vehicleEngine: VehicleEngine;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private vehicleEngineService: VehicleEngineService) { }

  ngOnInit() {
    this.vehicleEngine = new VehicleEngine();

    this.id = this.route.snapshot.params['id'];
    
    this.vehicleEngineService.getVehicleEngine(this.id)
      .subscribe(data => {
        console.log(data)
        this.vehicleEngine = data;
      }, error => console.log(error));
  }

  updateVehicleEngine() {
    console.log(this.vehicleEngine);
    this.vehicleEngineService.updateVehicleEngine(this.vehicleEngine)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vehicleEngine = new VehicleEngine();
    this.submitted = true;
    this.gotoList();
  }

  onSubmit() {
    this.updateVehicleEngine();    
  }

  gotoList() {
    this.router.navigate(['/view-vehicle-engine']);
  }

}

