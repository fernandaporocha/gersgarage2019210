import { Component, OnInit } from '@angular/core';
import { BookingStatus } from '../booking-status';
import { BookingStatusService } from '../booking-status.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-booking-status',
  templateUrl: './update-booking-status.component.html',
  styleUrls: ['./update-booking-status.component.css']
})
export class UpdateBookingStatusComponent implements OnInit {

  id:number;
  bookingStatus: BookingStatus;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private bookingStatusService: BookingStatusService) { }

  ngOnInit() {
    this.bookingStatus = new BookingStatus();

    this.id = this.route.snapshot.params['id'];
    
    this.bookingStatusService.getBookingStatus(this.id)
      .subscribe(data => {
        console.log(data)
        this.bookingStatus = data;
      }, error => console.log(error));
  }

  updateBookingStatus() {
    console.log(this.bookingStatus);
    this.bookingStatusService.updateBookingStatus(this.id, this.bookingStatus)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bookingStatus = new BookingStatus();
    this.submitted = true;
    this.gotoList();
  }

  onSubmit() {
    this.updateBookingStatus();    
  }

  gotoList() {
    this.router.navigate(['/view-booking-status']);
  }

}
