import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:8080/booking';  
  
  constructor(private http:HttpClient) { }  
  
  getBookingList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }
  
  createBooking(booking: object): Observable<object>{
    console.log("Creating Booking")
    console.log(booking);
    return this.http.post(`${this.baseUrl}`, booking);
    //return this.http.post(`${this.baseUrl}`, {bookingDTO : booking, bookingItemDTO: bookingItems});
  }

  deleteBooking(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
  
  getBooking(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }  
  
  updateBooking(value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}`, value);  
  }
}
