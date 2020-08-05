import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingType } from '../booking-type';
import { BookingTypeService } from '../booking-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-type-list',
  templateUrl: './booking-type-list.component.html',
  styleUrls: ['./booking-type-list.component.css']
})
export class BookingTypeListComponent implements OnInit {

  bookingTypes: Observable<BookingType[]>;

  constructor(private bookingTypeService: BookingTypeService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.bookingTypes = this.bookingTypeService.getBookingTypeList();
  }

  deleteBookingType(id: number) {
    this.bookingTypeService.deleteBookingType(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateBookingType(id: number){
    this.router.navigate(['update-booking-type', id]);
  }

  add(){
    this.router.navigate(['add-booking-type']);
  }

}
