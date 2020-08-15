import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking'
import { BookingService } from '../booking.service'
import { UserService } from 'src/app/user/user.service';
import { VehicleService } from 'src/app/vehicle/vehicle.service';
import { BookingTypeService } from 'src/app/booking-type/booking-type.service';
import { BookingStatusService } from 'src/app/booking-status/booking-status.service';
import { ServiceTypeService } from 'src/app/service-type/service-type.service';
import { ItemService } from 'src/app/item/item.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { BookingItem } from '../booking-item'

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  booking: Booking = new Booking();
  submitted = false;
  customerId: number = null;
  staffId: number = null;
  staffList: any = [];
  vehicleId: number = null;
  vehicleList: any= [];
  bookingTypeId: number = null;
  bookingTypeList: any = [];
  statusId: number = null;
  statusList: any = [];
  serviceIds: number[] = [];
  serviceList: any = [];
  itemIds: number[] = [];
  itemList: any = [];
  bookingDate: Date;
  minDate: Date = new Date();
  bookingItems: any = [];
  quantity: number = 0;


  constructor(
    private bookingService: BookingService,
    private userService: UserService,
    private vehicleService: VehicleService,
    private bookingTypeService: BookingTypeService,
    private bookingStatusService: BookingStatusService,
    private serviceTypeService: ServiceTypeService,
    private itemService: ItemService,
    public loginService: AuthenticationService,
    private router: Router) { }

    ngOnInit() {
      this.loadLists();
      console.log(this.booking.serviceIds);
      console.log("minDate")
      console.log(this.minDate);
    }
  
    save() {
      console.log(this.booking);
      console.log(this.loginService.loggedInUser);
      console.log(this.booking.bookingDate);
      if (sessionStorage.getItem('role')==="customer"){
        this.booking.customerId= parseInt(sessionStorage.getItem("userId"));
      }
      console.log(this.booking.customerId);
      this.booking.bookingItems=this.bookingItems;
      this.bookingService.createBooking(this.booking)
        .subscribe(data => console.log(data), error => console.log(error));
      this.booking = new Booking();
      this.gotoList();
    }
  
    onSubmit() {
      console.log(this.itemIds);
      console.log(this.serviceIds);
      this.booking.itemIds = this.itemIds;
      this.booking.serviceIds = this.serviceIds;
      this.submitted = true;
      this.save();    
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
          console.log("achei");
          return this.itemList[i];
        }
      }
    }

    addItem(){
      console.log("AddItem");
      console.log(this.quantity);
      console.log(this.itemIds);
      if(this.quantity>0){
        let selectedItem = this.getItemById(this.itemIds);
        //let item = new BookingItem(this.itemIds, this.getItemById(this.itemIds),this.quantity);
        let item = new BookingItem(selectedItem.id, selectedItem.name,this.quantity);
        console.log(item);
        
        //https://stackoverflow.com/questions/38225579/typescript-add-object-to-array-with-push
        this.bookingItems.push(item);
        console.log(this.bookingItems);
        console.log("item");
      }

    }

    addVehicle(){
      this.router.navigate(['add-vehicle']);
    }
}
