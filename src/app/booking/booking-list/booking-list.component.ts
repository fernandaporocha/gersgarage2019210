import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from '../booking';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor(private bookingService:BookingService, private router: Router) { }
  search;
  bookings: Observable<Booking[]>;  
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.bookings = this.bookingService.getBookingList();
  }

  deleteBooking(id: number) {  
    this.bookingService.deleteBooking(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.reloadData();
        },  
        error => console.log(error));  
  }  
  
  updateBooking(id: number){
    this.router.navigate(['update-booking', id]);
  }

  add(){
    this.router.navigate(['add-booking']);
  }

}
