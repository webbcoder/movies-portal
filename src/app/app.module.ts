import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieComponent} from "./shared/components/movie/movie.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    NavbarComponent,
    FilterComponent,
    MovieComponent,
    MoviesPageComponent,
    FilterPageComponent,
    SearchPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
