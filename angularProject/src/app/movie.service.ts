import {Injectable} from '@angular/core';
import {Movie} from "./models/movie";
import {fakeMovies} from "./fake-movies";

// Get data asynchronously with Observable
import {catchError, find, map, Observable, of, tap, throwError} from "rxjs";
// MessageService
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesURL = 'http://desktop-pl31r75:3000/movies';

  getMovies(): Observable<Movie[]> {
    // this.messageService.add(`${new Date().toLocaleString()}. Get movie list`)
    // return of(fakeMovies);
    return this.http.get<Movie[]>(this.moviesURL).pipe(
      tap(receivedMovies => console.log(`receivedMovies=${JSON.stringify(receivedMovies)}`)),
      catchError(error => of([]))
    );
  }

  getMovieFromId(id: number): Observable<Movie> {
    return of(fakeMovies.find(movie => movie.id === id)!);
  }

  constructor(
    private http: HttpClient,
    public messageService: MessageService) {

  }
}
