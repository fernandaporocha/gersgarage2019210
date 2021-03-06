import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { UserService } from 'src/app/user/user.service';
import { VehicleService } from 'src/app/vehicle/vehicle.service';
import { BookingTypeService } from 'src/app/booking-type/booking-type.service';
import { BookingStatusService } from 'src/app/booking-status/booking-status.service';
import { ServiceTypeService } from 'src/app/service-type/service-type.service';
import { ItemService } from 'src/app/item/item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { BookingItem } from '../booking-item';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  id:number;
  booking: Booking = new Booking();
  submitted = false;
  staffList: any = [];
  vehicleList: any= [];
  bookingTypeList: any = [];
  statusList: any = [];
  serviceList: any = [];
  itemList: any = [];
  quantity: number = 0;
  itemId: number = null;
  bookingDate: Date;


  constructor(
    private bookingService: BookingService,
    private userService: UserService,
    private vehicleService: VehicleService,
    private bookingTypeService: BookingTypeService,
    private bookingStatusService: BookingStatusService,
    private serviceTypeService: ServiceTypeService,
    private itemService: ItemService,
    public loginService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.booking = new Booking();
      this.id = this.route.snapshot.params['id'];
      this.loadLists();

      this.bookingService.getBooking(this.id)
      .subscribe(data => {
        console.log(data)
        this.booking = data;
      }, error => console.log(error));
    }

    updateBooking() {
      console.log("update");
      console.log(this.booking);
      
      console.log(this.booking.bookingDate);
      this.bookingService.updateBooking(this.booking)
        .subscribe(data => console.log(data), error => console.log(error));
      this.booking = new Booking();
      this.submitted = true;
      this.gotoList();
    }
  
    onSubmit() {
      console.log("submit");
      console.log(this.booking);
      console.log(this.booking.bookingDate)
      this.submitted = true;
      this.updateBooking();    
    }
  
    gotoList() {
      this.router.navigate(['/view-booking']);
    }
  
    loadLists(){
      this.bookingTypeService.getBookingTypeList().subscribe(data => {
        this.bookingTypeList = data;
      });
      this.vehicleService.getVehicleList().subscribe(data => {
        this.vehicleList = data;
      });
      this.bookingStatusService.getBookingStatusList().subscribe(data => {
        this.statusList = data;
      });
      this.userService.getStaffList().subscribe(data => {
        this.staffList = data;
      });
      this.serviceTypeService.getServiceTypeList().subscribe(data => {
        this.serviceList = data;
      });
      this.itemService.getItemList().subscribe(data => {
        this.itemList = data;
      });
      
    }

    getItemById(id){
      var i;
      for(i =0; i <this.itemList.length;i++){
        if(this.itemList[i].id==id){
          return this.itemList[i];
        }
      }
    }

    addItem(){
      if(this.quantity>0){
        let selectedItem = this.getItemById(this.itemId);
        let item = new BookingItem(selectedItem.id, selectedItem.name,this.quantity);
        
        https://stackoverflow.com/questions/38225579/typescript-add-object-to-array-with-push
        this.booking.bookingItems.push(item);
        console.log(this.booking.bookingItems);
      }
    }

    fillItem(itemId: number, quantity: number){
      console.log(itemId)
      console.log(quantity)
      this.quantity = quantity;
    }

    removeItem(index: number){
     //https://stackoverflow.com/questions/15292278/how-do-i-remove-an-array-item-in-typescript
     this.booking.bookingItems.splice(index,1);
    }
}
