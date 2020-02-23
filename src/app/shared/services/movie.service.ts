import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {map} from "rxjs/operators";
import {Genre, Movie, MovieDiscover} from "../interfaces";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class MovieService {
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Movie[]>{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${environment.apiKey}`)
      .pipe(map((response: MovieDiscover) => {
        return response.results.map((movie:Movie) => ({
          ...movie,
          release_date: new Date(movie.release_date)
        }))
      }))
  }

  getGenre(): Observable<Genre[]>{
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${environment.apiKey}`)
      .pipe(map((response) =>{
        return Object.keys(response)
          .map(key => {
            return response[key]
          })[0]
    }))
  }
  applyFilter(params:HttpParams):Observable<Movie[]>{
    return  this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${environment.apiKey}`,{
      params,
      observe: "response"
    })
      .pipe(map((response) => {
         return (response.body as MovieDiscover).results
           .map((movie:Movie) => ({
             ...movie,
             release_date: new Date(movie.release_date)
           }))
      }))
  }

  search(params: HttpParams): Observable<Movie[]> {
    return  this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&language=en-US`,{
      params,
      observe: "response"
    })
      .pipe(map((response) => {
        return (response.body as MovieDiscover).results
          .map((movie:Movie) => ({
            ...movie,
            release_date: new Date(movie.release_date)
          }))
      }))
  }
}
