import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {fakeMovies} from "../fake-movies";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgForOf
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: "star wars",
    releaseYear: 1977
  }
  movies = fakeMovies;

  constructor() {

  }

  ngOnInit() {

  }
}
