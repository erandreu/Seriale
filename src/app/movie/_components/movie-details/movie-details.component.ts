import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../_services/movie.service';
import {Show} from '../../_entities/show';
import {Movie} from '../../_entities/movie';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  chosenMovie: any;
  MyList = [];
  id = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
      this.getChosenMovie(this.id);
    }

  }

  getChosenMovie(id) {
    this.movieService.getSingleMovie(id).subscribe(response => {
      this.chosenMovie = response;
    });

  }

  saveToMyList() {
    this.MyList = JSON.parse(localStorage.getItem('favourites')) || [];
    if (this.MyList.every(({id}) => id !== this.chosenMovie.id)) {
      this.MyList.push(this.chosenMovie);
      localStorage.setItem('favourites', JSON.stringify(this.MyList));
      alert('Movie Added to List!');
      this.router.navigateByUrl('/movie/list');

    } else {
      alert('Already on the List!');
      this.router.navigateByUrl('/movie-my-list');
    }
  }

}
