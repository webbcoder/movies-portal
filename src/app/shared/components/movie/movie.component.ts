import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../interfaces";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  defaultImg: string = '';
  constructor() { }

  ngOnInit() {
  }

}
