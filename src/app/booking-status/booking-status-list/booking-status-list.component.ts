import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingStatus } from '../booking-status';
import { BookingStatusService } from '../booking-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-status-list',
  templateUrl: './booking-status-list.component.html',
  styleUrls: ['./booking-status-list.component.css']
})
export class BookingStatusListComponent implements OnInit {
  bookingStatuss: Observable<BookingStatus[]>;

  constructor(private bookingStatusService: BookingStatusService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.bookingStatuss = this.bookingStatusService.getBookingStatusList();
  }

  deleteBookingStatus(id: number) {
    this.bookingStatusService.deleteBookingStatus(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateBookingStatus(id: number){
    this.router.navigate(['update-booking-status', id]);
  }

  add(){
    this.router.navigate(['add-booking-status']);
  }
}
