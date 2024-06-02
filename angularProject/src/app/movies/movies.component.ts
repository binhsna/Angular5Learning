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
}
