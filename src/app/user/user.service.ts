import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/user';

  constructor(private http:HttpClient) { }

  getUserList(): Observable<any>{
    console.log("getlist");
    return this.http.get(`${this.baseUrl}`);
  }

  getStaffList(): Observable<any>{
    console.log("getStafflist");
    return this.http.get(`${this.baseUrl}/getStaff`);
  }

  createUser(user: object): Observable<object>{
    console.log("create user service");
    return this.http.post(`${this.baseUrl}`, user);
  }

  createContactInfor(contactInfo: object): Observable<any>{
    console.log('createContactInfor');
    return this.http.post('http://localhost:8080/contactDetails', contactInfo);
  }

  deleteUser(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
  
  getUser(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }

  getContactInfo(id: number): Observable<any> {  
    return this.http.get(`http://localhost:8080/contactDetails/${id}`);  
  }

  login(login: any): Observable<any> { 
    console.log(login); 
    return this.http.post(`${this.baseUrl}/login`, login);  
  } 
  
  updateUser(value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}`, value);  
  }  
}
