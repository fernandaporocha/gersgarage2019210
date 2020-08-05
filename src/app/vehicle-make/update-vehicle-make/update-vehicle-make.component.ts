import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleMake } from '../vehicle-make';
import { VehicleMakeService } from '../vehicle-make.service';

@Component({
  selector: 'app-update-vehicle-make',
  templateUrl: './update-vehicle-make.component.html',
  styleUrls: ['./update-vehicle-make.component.css']
})
export class UpdateVehicleMakeComponent implements OnInit {

  id:number;
  vehicleMake: VehicleMake;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private vehicleMakeService: VehicleMakeService) { }

  ngOnInit() {
    this.vehicleMake = new VehicleMake();

    this.id = this.route.snapshot.params['id'];
    
    this.vehicleMakeService.getVehicleMake(this.id)
      .subscribe(data => {
        console.log(data)
        this.vehicleMake = data;
      }, error => console.log(error));
  }

  updateVehicleMake() {
    console.log(this.vehicleMake);
    this.vehicleMakeService.updateVehicleMake(this.vehicleMake)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vehicleMake = new VehicleMake();
    this.submitted = true;
    this.gotoList();
  }

  onSubmit() {
    this.updateVehicleMake();    
  }

  gotoList() {
    this.router.navigate(['/view-vehicle-make']);
  }

}


