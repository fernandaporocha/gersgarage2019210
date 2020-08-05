import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceType } from '../service-type';
import { ServiceTypeService } from '../service-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-type-list',
  templateUrl: './service-type-list.component.html',
  styleUrls: ['./service-type-list.component.css']
})
export class ServiceTypeListComponent implements OnInit {

  serviceTypes: Observable<ServiceType[]>;

  constructor(private serviceTypeService: ServiceTypeService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.serviceTypes = this.serviceTypeService.getServiceTypeList();
  }

  deleteServiceType(id: number) {
    this.serviceTypeService.deleteServiceType(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateServiceType(id: number){
    this.router.navigate(['update-service-type', id]);
  }

  add(){
    this.router.navigate(['add-service-type']);
  }
}
