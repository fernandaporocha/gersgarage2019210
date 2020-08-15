import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = `${environment.API_URL}user`;

  constructor(private http:HttpClient) { }

  getUserList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getStaffList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getStaff`);
  }

  createUser(user: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`, user);
  }

  createContactInfor(contactInfo: object): Observable<any>{
    return this.http.post(`${environment.API_URL}contactDetails`, contactInfo);
  }

  deleteUser(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
  
  getUser(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }

  getContactInfo(id: number): Observable<any> {  
    return this.http.get(`${environment.API_URL}contactDetails/${id}`);  
  }

  login(login: any): Observable<any> { 
    return this.http.post(`${this.baseUrl}/login`, login);  
  } 
  
  updateUser(value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}`, value);  
  }  
}