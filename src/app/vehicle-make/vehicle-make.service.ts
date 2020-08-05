import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleMakeService {

  private baseUrl = 'http://localhost:8080/vehicleMake/';  
  
  constructor(private http:HttpClient) { }  
  
  getVehicleMakeList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }
  
  createVehicleMake(vehicleMake: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`, vehicleMake);
  }

  deleteVehicleMake(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
  
  getVehicleMake(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }  
  
  updateVehicleMake(value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}`, value);  
  }
}
