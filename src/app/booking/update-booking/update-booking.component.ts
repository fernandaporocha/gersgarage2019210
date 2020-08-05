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
import { BookingItem } from 'src/app/booking-item';
import { timers } from 'jquery';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  id:number;
  booking: Booking = new Booking();
  submitted = false;
  customerId: number = null;
  staffId: number = null;
  staffList: any = [];
  vehicleId: number = null;
  vehicleList: any= [];
  entryDate: Date = null;
	collectionDate: Date = null;
  bookingTypeId: number = null;
  bookingTypeList: any = [];
  statusId: number = null;
  statusList: any = [];
  serviceIds: number[] = [];
  serviceList: any = [];
  itemIds: number[] = [];
  itemList: any = [];
  bookingDate: Date;
  bookingItems: any = [];
  quantity: number = 0;
  canRemove: boolean = false;


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
      this.bookingDate = new Date(2013, 9, 22);

      this.bookingService.getBooking(this.id)
      .subscribe(data => {
        console.log(data)
        this.booking = data;
      }, error => console.log(error));

      this.bookingDate = new Date(2013, 9, 19);
      this.booking.bookingDate = this.bookingDate;
    }

    updateBooking() {
      console.log("update");
      console.log(this.booking);
      console.log(this.bookingDate);
      this.bookingService.updateBooking(this.booking)
        .subscribe(data => console.log(data), error => console.log(error));
      this.booking = new Booking();
      this.submitted = true;
      this.gotoList();
    }
  
    onSubmit() {
      this.booking.itemIds = this.itemIds;
      this.booking.serviceIds = this.serviceIds;
      console.log(this.booking);
      this.bookingService.updateBooking(this.booking)
      .subscribe(data => console.log(data), error => console.log(error));
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
      this.bookingItems=this.booking.bookingItems;
      
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
      let selectedItem = this.getItemById(this.itemIds);
      //let item = new BookingItem(this.itemIds, this.getItemById(this.itemIds),this.quantity);
      let item = new BookingItem(selectedItem.id, selectedItem.name,this.quantity);
      console.log(item);
      
      this.booking.bookingItems.push(item);
      console.log(this.bookingItems);
      console.log("item");

    }

    fillItem(itemId: number, quantity: number){
      console.log(itemId)
      console.log(quantity)
      this.quantity = quantity;
      this.canRemove = true;
      //document.getElementById('removeButton').enable=true; as HTMLElement;
      //this.itemIds = itemId;
    }

    getItemByIndex(index:number){
      var i;
      for(i =0; i <this.bookingItems.length;i++){
        if (i == index)
          return this.bookingItems[i];
      }
    }

    removeItem(index: number){
      console.log("remove")
      console.log(index)
      //console.log(document.getElementById('selected-items'));
      this.booking.bookingItems.splice(index,1);
    }
}
