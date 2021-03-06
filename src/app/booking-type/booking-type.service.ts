import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingTypeService {

  private baseUrl = `${environment.API_URL}bookingType`;  
  
  constructor(private http:HttpClient) { }  
  
  getBookingTypeList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }
  
  createBookingType(bookingType: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`, bookingType);
  }

  deleteBookingType(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
  
  getBookingType(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }  
  
  updateBookingType(value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}`, value);  
  }
}
