import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingStatusService {

  private baseUrl = 'http://localhost:8080/bookingStatus';

  constructor(private http: HttpClient) { }

  getBookingStatus(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBookingStatus(bookingStatus: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bookingStatus);
  }

  updateBookingStatus(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteBookingStatus(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBookingStatusList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
