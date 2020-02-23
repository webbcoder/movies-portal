import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from "../shared/interfaces";
import {Subscription} from "rxjs";
import {MovieService} from "../shared/services/movie.service";
import {ActivatedRoute} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit, OnDestroy {

  movies: Movie[] = [];
  fSub: Subscription;
  isResult: boolean = true;
  error: string;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let params: HttpParams;
    this.route.queryParams.subscribe(filterParams => {
      this.isResult =true;
      Object.keys(filterParams).map((key => {
        params = new HttpParams();
        params = params.set(key, filterParams[key])
      }));
      this.movieService.applyFilter(params).subscribe(movies => {
        this.movies = movies;
        if(!this.movies.length) {
          this.isResult = false
        }
      })
    }, error => {
      this.error = error.message
    })
  }
  ngOnDestroy(){
    if(this.fSub){
      this.fSub.unsubscribe();
    }
  }

}
