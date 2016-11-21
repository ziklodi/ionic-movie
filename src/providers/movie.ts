export class Movie {
  id: number;
  name: string;
  posterPath: string
  voteAverage: number;
  overview: string;

  private baseImageUrl: string = "http://image.tmdb.org/t/p/";

  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.posterPath = params.poster_path;
    this.voteAverage = params.vote_average;
    this.overview = params.overview;
  }

  imageUrl(size) {
    let imageSize = size === "large" ? "w185" : "w92";
    return `${this.baseImageUrl}/${imageSize}/${this.posterPath}`;
  }
}

