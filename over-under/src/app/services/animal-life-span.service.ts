import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimalLifeSpan } from '../models/animal-life-span.model';

// const baseURL = 'http://localhost:8000/api/animallifespans';
const baseURL = 'https://overunderwebapp.herokuapp.com/api/animallifespans';

@Injectable({
  providedIn: 'root'
})
export class AnimalLifeSpanService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<AnimalLifeSpan[]> {
    return this.http.get<AnimalLifeSpan[]>(baseURL);
  }

  get(id: any): Observable<AnimalLifeSpan> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseURL);
  }
}
