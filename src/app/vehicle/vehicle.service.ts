import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:8080/vehicle/';  
  
  constructor(private http:HttpClient) { }  
  
  getVehicleList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }
  
  createVehicle(vehicle: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`, vehicle);
  }

  deleteVehicle(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
  
  getVehicle(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }  
  
  updateVehicle(value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}`, value);  
  }

  getVehicleTypeList(): Observable<any> {  
    return this.http.get('http://localhost:8080/vehicleType/');  
  }
}
