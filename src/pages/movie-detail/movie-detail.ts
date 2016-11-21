import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MovieService } from '../../providers/movie-service';
import { Movie } from '../../providers/movie';

@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html'
})
export class MovieDetailPage {
  movie: Movie;

  constructor(private navCtrl: NavController, private params: NavParams, private movieService: MovieService) {
    this.movie = new Movie({});
  }

  ionViewDidLoad() {
    let id = this.params.get('id');
    this.movieService.getDetail(id).subscribe(movie => this.movie = movie);
  }

}
