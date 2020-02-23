import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {History} from "../../interfaces";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  form: FormGroup;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    if(!JSON.parse(localStorage.getItem('history'))){
      localStorage.setItem('history',JSON.stringify([]));
    }
    this.form = new FormGroup({
      search: new FormControl('', Validators.required)
    })
  }

  submit() {
    if(this.form.invalid){
      return
    }

    let history: History[] = JSON.parse(
      localStorage.getItem('history')
    );

    history.push({
      date: new Date(),
      params: this.form.value.search
    } as History);
    localStorage.setItem('history', JSON.stringify(history));

    this.router.navigate(['/search'],
      { queryParams: { query: this.form.value.search }});
    this.form.reset()
  }

}
