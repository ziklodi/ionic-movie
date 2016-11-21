import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MovieService } from '../../providers/movie-service';
import { Movie } from '../../providers/movie';
import { MovieDetailPage } from '../movie-detail/movie-detail';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {
  movies: Movie[];
  sortBy: string = "popularity";  

  constructor(private navCtrl: NavController, private movieService: MovieService) {}

  ionViewDidLoad() {
    this.setMovies();
  }

  setMovies() {
    let service = this.sortBy === "popularity" ?  this.movieService.getPopular() : this.movieService.getTopRated(); 
    service.subscribe(movies => this.movies = movies);
  }

  openDetail(id) {
    this.navCtrl.push(MovieDetailPage, {id: id});
  }
}
