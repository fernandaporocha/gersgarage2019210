import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { environment } from 'src/environments/environment';
  
@Injectable({  
  providedIn: 'root'  
})  

@Injectable({
  providedIn: 'root'
})
export class VehicleEngineService {

  private baseUrl = `${environment.API_URL}vehicleEngine`;

  constructor(private http:HttpClient) { }

  getVehicleEngineList(): Observable<any>{
    console.log("getlist");
    return this.http.get(`${this.baseUrl}`);
  }

  createVehicleEngine(vehicleEngine: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`, vehicleEngine);
  }

  deleteVehicleEngine(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
  
  getVehicleEngine(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }  
  
  updateVehicleEngine(value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}`, value);  
  }  
}
