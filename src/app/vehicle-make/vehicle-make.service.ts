import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleMakeService {

  private baseUrl = `${environment.API_URL}vehicleMake/`;  
  
  constructor(private http:HttpClient) { }  
  
  getVehicleMakeList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }

  getVehicleTypeList(): Observable<any> {  
    return this.http.get(`${environment.API_URL}vehicleType/`);  
  }
  
  createVehicleMake(vehicleMake: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`, vehicleMake);
  }

  deleteVehicleMake(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`);  
  }  
  
  getVehicleMake(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }

  getVehicleMakeListByVehicleTypeId(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}vehicleType/${id}`);    
  }
  
  updateVehicleMake(vehicleMake: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}`, vehicleMake);  
  }
}
