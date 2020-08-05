import { Component, OnInit } from '@angular/core';
import { BookingTypeService } from '../booking-type.service';
import { BookingType } from '../booking-type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-booking-type',
  templateUrl: './add-booking-type.component.html',
  styleUrls: ['./add-booking-type.component.css']
})
export class AddBookingTypeComponent implements OnInit {

  bookingType: BookingType = new BookingType();
  submitted = false;

  constructor(private bookingTypeService: BookingTypeService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.bookingTypeService.createBookingType(this.bookingType)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bookingType = new BookingType();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/view-booking-type']);
  }
}