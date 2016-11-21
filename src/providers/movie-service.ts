import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Movie } from './movie';

@Injectable()
export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'xxx';

  constructor(private http: Http) {}
  
  discover(sortBy, minVoteCount): Observable<Movie[]> {
    let queryString = "api_key=" + this.apiKey + "&language=en-US&sort_by=" + sortBy + "&vote_count.gte=" + minVoteCount; 
    let url = this.baseUrl + "/discover/tv?" + queryString;
    return this.http.get(url).map(response => response.json().results.map(movie => new Movie(movie)));
  }

  getPopular(): Observable<Movie[]> {
    return this.discover('popularity.desc', 1);
  }
  
  getTopRated(): Observable<Movie[]> {
    return this.discover('vote_average.desc', 50);
  }

  search(searchTerm): Observable<Movie[]> {
    let queryString = "api_key=" + this.apiKey + "&language=en-US&query=" + searchTerm; 
    let url = this.baseUrl + "/search/tv?" + queryString;
    return this.http.get(url).map(response => response.json().results.map(movie => new Movie(movie)));    
  }
  
  getDetail(id): Observable<Movie> {
    let queryString = "api_key=" + this.apiKey + "&language=en-US"; 
    let url = this.baseUrl + "/tv/" + id + "?" + queryString;;
    return this.http.get(url).map(response => new Movie(response.json()));    
  }
}
