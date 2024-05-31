import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    UpperCasePipe
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

  constructor() {

  }

  ngOnInit() {

  }
}
