import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

import { SearchByDate } from './../../search-by-date';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from '../booking';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor(private bookingService:BookingService, private router: Router) { }
  search;
  searchDate;
  bookings: Observable<Booking[]>;
  searchByDate: SearchByDate = new SearchByDate();
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    console.log("reload");
    console.log(this.bookingService.getBookingList());
    this.bookings = this.bookingService.getBookingList();
  }

  deleteBooking(id: number) {  
    this.bookingService.deleteBooking(id)  
      .subscribe(  
        data => {  
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

  clear(){
    this.searchDate = null;
    this.reloadData();
  }

  onDateChange(){ 
    this.searchByDate = new SearchByDate();
    this.searchByDate.minDate=this.searchDate[0];
    this.searchByDate.maxDate=this.searchDate[1];    
    this.bookings = this.bookingService.searchBooking(this.searchByDate);
  }

  invoice() {
    console.log("first")
    this.bookingService.getInvoice(1)
      .subscribe(response => {
        console.log("response")
        console.log(response)
        const filename = response.headers.get('filename');
        
        this.saveFile(response.body, filename);
      });
  }

  saveFile(data: any, filename?: string) {
    const blob = new Blob([data], {type: 'application/pdf; charset=utf-8'});
    fileSaver.saveAs(blob, filename);
  }
}
