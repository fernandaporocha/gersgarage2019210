import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { AddVehicleEngineComponent } from './vehicle-engine/add-vehicle-engine/add-vehicle-engine.component';
import { VehicleEngineListComponent } from './vehicle-engine/vehicle-engine-list/vehicle-engine-list.component';
import { VehicleMakeListComponent } from './vehicle-make/vehicle-make-list/vehicle-make-list.component';
import { AddVehicleMakeComponent } from './vehicle-make/add-vehicle-make/add-vehicle-make.component';
import { AddBookingStatusComponent } from './booking-status/add-booking-status/add-booking-status.component';
import { BookingStatusListComponent } from './booking-status/booking-status-list/booking-status-list.component';
import { UpdateBookingStatusComponent } from './booking-status/update-booking-status/update-booking-status.component';
import { UpdateVehicleEngineComponent } from './vehicle-engine/update-vehicle-engine/update-vehicle-engine.component';
import { UpdateVehicleMakeComponent } from './vehicle-make/update-vehicle-make/update-vehicle-make.component';
import { AddVehicleModelComponent } from './vehicle-model/add-vehicle-model/add-vehicle-model.component';
import { UpdateVehicleModelComponent } from './vehicle-model/update-vehicle-model/update-vehicle-model.component';
import { VehicleModelListComponent } from './vehicle-model/vehicle-model-list/vehicle-model-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { UpdateItemComponent } from './item/update-item/update-item.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { ServiceTypeListComponent } from './service-type/service-type-list/service-type-list.component';
import { AddServiceTypeComponent } from './service-type/add-service-type/add-service-type.component';
import { UpdateServiceTypeComponent } from './service-type/update-service-type/update-service-type.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './vehicle/update-vehicle/update-vehicle.component';
import { AddBookingTypeComponent } from './booking-type/add-booking-type/add-booking-type.component';
import { UpdateBookingTypeComponent } from './booking-type/update-booking-type/update-booking-type.component';
import { BookingTypeListComponent } from './booking-type/booking-type-list/booking-type-list.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { AddBookingComponent } from './booking/add-booking/add-booking.component';
import { UpdateBookingComponent } from './booking/update-booking/update-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ApiService } from './api.service';
import { ListErrorsComponent } from './list-errors/list-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleEngineComponent,
    VehicleEngineListComponent,
    VehicleMakeListComponent,
    AddVehicleMakeComponent,
    AddBookingStatusComponent,
    BookingStatusListComponent,
    UpdateBookingStatusComponent,
    UpdateVehicleEngineComponent,
    UpdateVehicleMakeComponent,
    AddVehicleModelComponent,
    UpdateVehicleModelComponent,
    VehicleModelListComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent,
    ItemListComponent,
    UpdateItemComponent,
    AddItemComponent,
    ServiceTypeListComponent,
    AddServiceTypeComponent,
    UpdateServiceTypeComponent,
    VehicleListComponent,
    AddVehicleComponent,
    UpdateVehicleComponent,
    BookingTypeListComponent,
    AddBookingTypeComponent,
    UpdateBookingTypeComponent,
    BookingTypeListComponent,
    BookingListComponent,
    AddBookingComponent,
    UpdateBookingComponent,
    LoginComponent,
    LogoutComponent,
    ListErrorsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
