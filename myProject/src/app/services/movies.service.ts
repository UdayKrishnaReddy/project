import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../components/movies/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  fetchDetails():Observable<PeriodicElement[]>{
    return <Observable<PeriodicElement[]>> this.http.get("http://localhost:3000/posts")
  }
}
