import {Injectable} from '@angular/core';
import {fakeMovies} from "./fake-movies";
import {Movie} from "./models/movie";

// Get data asynchronously with Observable
import {Observable, of} from "rxjs";

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
