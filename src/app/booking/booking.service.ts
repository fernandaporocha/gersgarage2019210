import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = `${environment.API_URL}booking`;  
  
  constructor(private http:HttpClient) { }  
  
  getBookingList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`);  
  }
  
  createBooking(booking: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`, booking);
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

  searchBooking(value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/search`, value);  
  }

  getInvoice(id: number): Observable<HttpResponse<string>> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'text/pdf; charset=utf-8');
 
    return this.http.get(`${this.baseUrl}/invoice/${id}`, {
      headers: headers,
      observe: 'response',
      responseType: 'text'
    });
  }
}
