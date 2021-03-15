import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../_entities/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  MOVIES_URL = 'http://api.tvmaze.com/schedule?country=US';
  MOVIES_URL1 = 'http://api.tvmaze.com/shows/';

  constructor(private http: HttpClient) {
  }


  getMovies(): Observable<any> {
    return this.http.get<any>(this.MOVIES_URL)
      .pipe(
        catchError(this.handleError<Movie[]>('getMovies', []))
      );
  }

  getSingleMovie(id) {
    return this.http.get(this.MOVIES_URL1 + id);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
