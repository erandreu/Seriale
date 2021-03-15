import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Movie} from '../../../movie/_entities/movie';
import {Show} from '../../../movie/_entities/show';

@Component({
  selector: 'app-movie-my-list',
  templateUrl: './movie-my-list.component.html',
  styleUrls: ['./movie-my-list.component.css']
})
export class MovieMyListComponent implements OnInit {

  MyList: Show [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getMyList();
  }

  getMyList() {
    this.MyList = JSON.parse(localStorage.getItem('favourites')) || [];
  }

  navigateToMovieDetails(id) {
    this.router.navigateByUrl('movie/details/' + id);
  }

  removeMovie(remove_id) {
    this.MyList = this.MyList.filter(({ id }) => id !== remove_id);
    localStorage.setItem('favourites', JSON.stringify(this.MyList));
    alert('Movie Removed!');
    this.router.navigateByUrl('/movie-my-list');
  }

}
