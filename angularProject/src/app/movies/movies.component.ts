import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  /* movie: Movie = {
     id: 1,
     name: "star wars",
     releaseYear: 1977
   }*/
  // movies = fakeMovies;
  movies!: Movie[];

  constructor(private movieService: MovieService) {

  }

  getMoviesFromServices(): void {
    // this.movies = this.movieService.getMovies();
    this.movieService.getMovies().subscribe(
      (updateMovies) => {
        this.movies = updateMovies;
        console.log(`this.movies = ${JSON.stringify(this.movies)}`);
      }
    );
  }

  ngOnInit() {
    this.getMoviesFromServices();
  }

  // Action when select a Movie in List items
  /* selectedMovie!: Movie;
   onSelect(movie: Movie): void {
     this.selectedMovie = movie;
     console.log(`selectMovie = ${JSON.stringify(this.selectedMovie)}`);
   }*/

  // Add new movie
  add(name: string, releaseYear: string): void {
    name = name.trim();
    if (Number.isNaN(Number(releaseYear)) || !name || Number(releaseYear) === 0) {
      alert('Name must not be blank, Release year must be a number!');
      return;
    } else {
      const newMovie: Movie = new Movie();
      newMovie.name = name;
      newMovie.releaseYear = Number(releaseYear);
      this.movieService.addMovie(newMovie)
        .subscribe(insertMovie => {
          this.movies.push(insertMovie);
        });
    }
  }

  delete(movieId: number): void {
    this.movieService.deleteMovie(movieId)
      .subscribe(
        () => {
          this.movies = this.movies.filter(eachMovie => eachMovie.id !== movieId);
        });
  }
}
