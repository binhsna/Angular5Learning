import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Movie} from "./models/movie";
import {fakeMovies} from "./fake-movies";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(): Observable<Movie[]> {
    return of(fakeMovies);
  }

  constructor() {
  }
}
