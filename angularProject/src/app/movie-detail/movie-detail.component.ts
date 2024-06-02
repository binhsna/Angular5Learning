import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../models/movie";
// Router
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {MovieService} from "../movie.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getMovieFromRouter();
  }

  getMovieFromRouter(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`)
    // Call service to "get movie from id" ?
    this.movieService.getMovieFromId(id).subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    // Quay lại màn hình trước đó
    this.location.back();
  }
}
