import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlaceItem } from '../models/place-item';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private url = environment.apiUrl + 'api/places/';

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Array<PlaceItem>> {
    return this.http.get<Array<PlaceItem>>(this.url);
  }

  updatePlace(place: PlaceItem): Observable<Object> {
    return this.http.put<PlaceItem>(`${this.url}${place.id}`, place);
  }

  addPlace(place: PlaceItem): Observable<Object> {
    return this.http.post<PlaceItem>(`${this.url}`, place);
  }

  deletePlace(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.url}${id}`);
  }
}
