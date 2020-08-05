import { Component, OnInit } from '@angular/core';
import { ServiceType } from '../service-type';
import { Router } from '@angular/router';
import { ServiceTypeService } from '../service-type.service';

@Component({
  selector: 'app-add-service-type',
  templateUrl: './add-service-type.component.html',
  styleUrls: ['./add-service-type.component.css']
})
export class AddServiceTypeComponent implements OnInit {

  serviceType: ServiceType = new ServiceType();
  submitted = false;

  constructor(private serviceTypeService: ServiceTypeService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.serviceTypeService.createServiceType(this.serviceType)
      .subscribe(data => console.log(data), error => console.log(error));
    this.serviceType = new ServiceType();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/view-service-type']);
  }
}