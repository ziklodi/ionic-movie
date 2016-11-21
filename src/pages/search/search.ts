import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

import { MovieService } from '../../providers/movie-service';
import { Movie } from '../../providers/movie';
import { MovieDetailPage } from '../movie-detail/movie-detail';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  movies: Movie[];
  searchControl: FormControl;

  constructor(private navCtrl: NavController, private movieService: MovieService) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges
      .filter(text => text.length > 3)
      .debounceTime(700)
      .mergeMap(searchTerm => this.movieService.search(searchTerm))
      .subscribe(movies => this.movies = movies);
  }

  openDetail(id) {
    this.navCtrl.push(MovieDetailPage, {id: id});
  }
}
