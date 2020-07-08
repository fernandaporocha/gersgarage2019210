import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleEngineComponent } from './add-vehicle-engine/add-vehicle-engine.component';
import { VehicleEngineListComponent } from './vehicle-engine-list/vehicle-engine-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleEngineComponent,
    VehicleEngineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
