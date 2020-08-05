import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleEngineComponent } from './vehicle-engine/add-vehicle-engine/add-vehicle-engine.component';
import { VehicleEngineListComponent } from './vehicle-engine/vehicle-engine-list/vehicle-engine-list.component';
import { AddVehicleMakeComponent } from './vehicle-make/add-vehicle-make/add-vehicle-make.component';
import { VehicleMakeListComponent } from './vehicle-make/vehicle-make-list/vehicle-make-list.component';
import { BookingStatusListComponent } from './booking-status/booking-status-list/booking-status-list.component';
import { AddBookingStatusComponent } from './booking-status/add-booking-status/add-booking-status.component';
import { UpdateBookingStatusComponent } from './booking-status/update-booking-status/update-booking-status.component';
import { UpdateVehicleEngineComponent } from './vehicle-engine/update-vehicle-engine/update-vehicle-engine.component';
import { UpdateVehicleMakeComponent } from './vehicle-make/update-vehicle-make/update-vehicle-make.component';
import { VehicleModelListComponent } from './vehicle-model/vehicle-model-list/vehicle-model-list.component';
import { AddVehicleModelComponent } from './vehicle-model/add-vehicle-model/add-vehicle-model.component';
import { UpdateVehicleModelComponent } from './vehicle-model/update-vehicle-model/update-vehicle-model.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { UpdateItemComponent } from './item/update-item/update-item.component';
import { ServiceTypeListComponent } from './service-type/service-type-list/service-type-list.component';
import { AddServiceTypeComponent } from './service-type/add-service-type/add-service-type.component';
import { UpdateServiceTypeComponent } from './service-type/update-service-type/update-service-type.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './vehicle/update-vehicle/update-vehicle.component';
import { AddBookingTypeComponent } from './booking-type/add-booking-type/add-booking-type.component';
import { UpdateBookingTypeComponent } from './booking-type/update-booking-type/update-booking-type.component';
import { BookingTypeListComponent } from './booking-type/booking-type-list/booking-type-list.component';
import { UpdateBookingComponent } from './booking/update-booking/update-booking.component';
import { AddBookingComponent } from './booking/add-booking/add-booking.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo:'view-booking', pathMatch: 'full'},
  { path: 'view-vehicle-engine', component: VehicleEngineListComponent},
  { path: 'add-vehicle-engine', component: AddVehicleEngineComponent},
  { path: 'update-vehicle-engine/:id', component: UpdateVehicleEngineComponent},
  { path: 'view-vehicle-make', component: VehicleMakeListComponent},
  { path: 'add-vehicle-make', component: AddVehicleMakeComponent},
  { path: 'update-vehicle-make/:id', component: UpdateVehicleMakeComponent},
  { path: 'view-booking-status', component: BookingStatusListComponent},
  { path: 'add-booking-status', component: AddBookingStatusComponent},
  { path: 'update-booking-status/:id', component: UpdateBookingStatusComponent},
  { path: 'view-vehicle-model', component: VehicleModelListComponent},
  { path: 'add-vehicle-model', component: AddVehicleModelComponent},
  { path: 'update-vehicle-model/:id', component: UpdateVehicleModelComponent},
  { path: 'view-user', component: UserListComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'update-user/:id', component: UpdateUserComponent},
  { path: 'view-item', component: ItemListComponent},
  { path: 'add-item', component: AddItemComponent},
  { path: 'update-item/:id', component: UpdateItemComponent},
  { path: 'view-service-type', component: ServiceTypeListComponent},
  { path: 'add-service-type', component: AddServiceTypeComponent},
  { path: 'update-service-type/:id', component: UpdateServiceTypeComponent},
  { path: 'view-vehicle', component: VehicleListComponent},
  { path: 'add-vehicle', component: AddVehicleComponent},
  { path: 'update-vehicle/:id', component: UpdateVehicleComponent},
  { path: 'view-booking-type', component: BookingTypeListComponent},
  { path: 'add-booking-type', component: AddBookingTypeComponent},
  { path: 'update-booking-type/:id', component: UpdateBookingTypeComponent},
  { path: 'view-booking', component: BookingListComponent},
  { path: 'add-booking', component: AddBookingComponent},
  { path: 'update-booking/:id', component: UpdateBookingComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }