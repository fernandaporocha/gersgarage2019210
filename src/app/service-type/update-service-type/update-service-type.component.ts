import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceTypeService } from '../service-type.service';
import { ServiceType } from '../service-type';

@Component({
  selector: 'app-update-service-type',
  templateUrl: './update-service-type.component.html',
  styleUrls: ['./update-service-type.component.css']
})
export class UpdateServiceTypeComponent implements OnInit {

  id:number;
  serviceType: ServiceType;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private serviceTypeService: ServiceTypeService) { }

  ngOnInit() {
    this.serviceType = new ServiceType();

    this.id = this.route.snapshot.params['id'];
    
    this.serviceTypeService.getServiceType(this.id)
      .subscribe(data => {
        console.log(data)
        this.serviceType = data;
      }, error => console.log(error));
  }

  updateServiceType() {
    console.log(this.serviceType);
    this.serviceTypeService.updateServiceType(this.serviceType)
      .subscribe(data => console.log(data), error => console.log(error));
    this.serviceType = new ServiceType();
    this.submitted = true;
    this.gotoList();
  }

  onSubmit() {
    this.updateServiceType();    
  }

  gotoList() {
    this.router.navigate(['/view-service-type']);
  }
}