import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  private baseUrl = 'http://localhost:8080/serviceType';

  constructor(private http: HttpClient) { }

  getServiceType(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createServiceType(serviceType: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, serviceType);
  }

  updateServiceType(value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteServiceType(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getServiceTypeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

