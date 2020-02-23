import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MoviesPageComponent} from "./movies-page/movies-page.component";
import {FilterPageComponent} from "./filter-page/filter-page.component";
import {SearchPageComponent} from "./search-page/search-page.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/movies', pathMatch: 'full'},
      {path: '', component: HomePageComponent, children: [
          {path: 'movies', component: MoviesPageComponent},
          {path:'movies/filter', component: FilterPageComponent}
        ]},
      {path: 'search', component: SearchPageComponent},
      {path: 'error', component: ErrorPageComponent},
      {path: '**', redirectTo: '/error'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
