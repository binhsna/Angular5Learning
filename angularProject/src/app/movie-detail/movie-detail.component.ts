import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  @Input() movie!: Movie;

  constructor() {
  }

  ngOnInit() {

  }
}
