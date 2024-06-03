import {Injectable} from '@angular/core';
import {Movie} from "./models/movie";
import {fakeMovies} from "./fake-movies";

// Get data asynchronously with Observable
import {catchError, find, map, Observable, of, tap, throwError} from "rxjs";
// MessageService
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // desktop-pl31r75 -> hostname
  private moviesURL = 'http://desktop-pl31r75:3000/movies';

  getMovies(): Observable<Movie[]> {
    // this.messageService.add(`${new Date().toLocaleString()}. Get movie list`)
    // return of(fakeMovies);
    return this.http.get<Movie[]>(this.moviesURL).pipe(
      tap(receivedMovies => console.log(`receivedMovies = ${JSON.stringify(receivedMovies)}`)),
      catchError(error => of([]))
    );
  }

  getMovieFromId(id: number): Observable<Movie> {
    // return of(fakeMovies.find(movie => movie.id === id)!);
    const url = `${this.moviesURL}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(selectedMovie => console.log(`selected movie = ${JSON.stringify(selectedMovie)}`)),
      catchError(error => of(new Movie()))
    );
  }

  /** PUT: Update the movie on the server */
  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(`${this.moviesURL}/${movie.id}`, movie, httpOptions).pipe(
      tap(updateMovie => console.log(`update movie = ${JSON.stringify(updateMovie)}`)),
      catchError(error => of(new Movie()))
    );
  }

  /** POST: Add a new movie to the server */
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesURL, newMovie, httpOptions).pipe(
      tap((movie: Movie) => console.log(`inserted movie = ${JSON.stringify(movie)}`)),
      catchError(error => of(new Movie()))
    );
  }

  /** DELETE: Delete the movie from server */
  deleteMovie(movieId: number): Observable<Movie | null> {
    const url = `${this.moviesURL}/${movieId}`;
    return this.http.delete<Movie>(url, httpOptions).pipe(
      tap(() => console.log(`deleted movie with id = ${movieId}`)),
      catchError(error => of(null))
    );
  }

  constructor(
    private http: HttpClient,
    public messageService: MessageService) {
  }
}
