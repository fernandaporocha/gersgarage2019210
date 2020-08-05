import { Component, OnInit } from '@angular/core';
import { BookingStatus } from '../booking-status';
import { BookingStatusService } from '../booking-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-booking-status',
  templateUrl: './add-booking-status.component.html',
  styleUrls: ['./add-booking-status.component.css']
})

export class AddBookingStatusComponent implements OnInit {

  bookingStatus: BookingStatus = new BookingStatus();
  submitted = false;

  constructor(private bookingStatusService: BookingStatusService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.bookingStatusService.createBookingStatus(this.bookingStatus)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bookingStatus = new BookingStatus();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/view-booking-status']);
  }

}
