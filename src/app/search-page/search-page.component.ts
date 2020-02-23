import { Component, OnInit } from '@angular/core';
import {Movie} from "../shared/interfaces";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../shared/services/movie.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  movies: Movie[] = [];
  isResult: boolean = true;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(searchParams =>{
        this.isResult = true;
        if(searchParams.query){
          let params = new HttpParams();
          params = params.set('query', searchParams.query);
          this.movieService.search(params).
          subscribe((movies: Movie[]) => {
            this.movies = movies;
            if(!Object.keys(this.movies).length) {
              this.isResult = false
            }
          })
        }
      }, error => {
        this.error = error.message
      })
  }

}
