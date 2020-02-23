import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Subscription} from "rxjs";
import {Genre, History} from "../../interfaces";
import {years, rating} from "../../helpers/filter";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  genres: Genre[];
  gSub: Subscription;
  years: number[] = [];
  rating: number[];
  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.gSub = this.movieService.getGenre().subscribe(genres => {
      this.genres = genres;
    });
    this.years = years();
    this.rating = rating;
    this.form = new FormGroup({
      with_genres: new FormControl(''),
      year: new FormControl(''),
      'vote_average.gte': new FormControl(''),
    })
  }
  ngOnDestroy(){
    if(this.gSub){
      this.gSub.unsubscribe();
    }
  }

  submit() {
    const formData = {...this.form.value};
    let formDataValues = Object.values(formData).filter(data => {
       return data !==''
    });
    if(!formDataValues.length){
      this.router.navigate(['movies']);
      return;
    }
    let params = {};
    Object.keys(formData).map(key => {
      if(formData[key]){
        params[key] = formData[key]
      }
    });
    let history: History[] = JSON.parse(
      localStorage.getItem('history')
    );
    history.push({
      date: new Date(),
      params: params
    } as History);
    localStorage.setItem('history', JSON.stringify(history));

    this.router.navigate(['/movies','filter'], {queryParams: params})
  }
}
