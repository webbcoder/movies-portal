import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from "../shared/interfaces";
import {Subscription} from "rxjs";
import {MovieService} from "../shared/services/movie.service";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit, OnDestroy {

  movies: Movie[] = [];
  mSub: Subscription;
  error: string;

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.mSub = this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
    }, error => {
      this.error = error.message
    })
  }

  ngOnDestroy(){
    if(this.mSub){
      this.mSub.unsubscribe();
    }
  }

}
