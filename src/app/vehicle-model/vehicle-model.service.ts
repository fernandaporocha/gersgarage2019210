import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleModelService {

  private baseUrl = `${environment.API_URL}vehicleModel/`;  
  
  constructor(private http:HttpClient) { }  
  
  getVehicleModelList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }

  getVehicleModelListByMakeId(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/vehicleMake/${id}`);    
  }
  
  createVehicleModel(vehicleModel: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`, vehicleModel);
  }

  deleteVehicleModel(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
  
  getVehicleModel(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }  
  
  updateVehicleModel(value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}`, value);  
  }
}
