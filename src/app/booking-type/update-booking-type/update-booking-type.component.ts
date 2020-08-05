import { Component, OnInit } from '@angular/core';
import { BookingType } from '../booking-type';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingTypeService } from '../booking-type.service';

@Component({
  selector: 'app-update-booking-type',
  templateUrl: './update-booking-type.component.html',
  styleUrls: ['./update-booking-type.component.css']
})
export class UpdateBookingTypeComponent implements OnInit {

  id:number;
  bookingType: BookingType;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private bookingTypeService: BookingTypeService) { }

  ngOnInit() {
    this.bookingType = new BookingType();

    this.id = this.route.snapshot.params['id'];
    
    this.bookingTypeService.getBookingType(this.id)
      .subscribe(data => {
        console.log(data)
        this.bookingType = data;
      }, error => console.log(error));
  }

  updateBookingType() {
    console.log(this.bookingType);
    this.bookingTypeService.updateBookingType(this.bookingType)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bookingType = new BookingType();
    this.submitted = true;
    this.gotoList();
  }

  onSubmit() {
    this.updateBookingType();    
  }

  gotoList() {
    this.router.navigate(['/view-booking-type']);
  }

}