import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhoneItem } from './models/phone-item';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private url = environment.apiUrl + 'api/phones/';

  constructor(private http: HttpClient) { }

  getPhones(): Observable<Array<PhoneItem>> {
    return this.http.get<Array<PhoneItem>>(this.url);
  }
  
  getPhonesWithFilter(place: string, post: string, name: string): Observable<Array<PhoneItem>> {
    return this.http.get<Array<PhoneItem>>(this.url + '?place=' + place + '&post=' + post + '&name='+ name);
  }

  updatePhone(phone: PhoneItem): Observable<Object> {
    return this.http.put<PhoneItem>(`${this.url}${phone.id}`, phone);
  }

  addPhone(phone: PhoneItem): Observable<Object> {
    return this.http.post<PhoneItem>(`${this.url}`, phone);
  }

  deletePhone(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}${id}`);
  }
}
