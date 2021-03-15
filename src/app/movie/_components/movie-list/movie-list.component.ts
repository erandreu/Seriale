import {Component, OnInit} from '@angular/core';
import {Movie} from '../../_entities/movie';
import {Router} from '@angular/router';
import {MovieService} from '../../_services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Movie[] = [];

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
    this.getMovieListFormServer();
  }

  getMovieListFormServer() {
    this.movieService.getMovies().subscribe(response => {
      this.movieList = response;
    });
  }

  navigateToMovieDetails(id) {
    this.router.navigateByUrl('movie/details/' + id);
  }

}
