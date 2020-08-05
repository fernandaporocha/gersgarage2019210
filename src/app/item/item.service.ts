import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = `${environment.API_URL}item`;

  constructor(private http: HttpClient) { }

  getItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createItem(item: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, item);
  }

  updateItem(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, value);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getItemList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
