import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieMyListComponent} from './movielist/_components/movie-my-list/movie-my-list.component';

const routes: Routes = [
  {path: '', component: MovieMyListComponent},
  {path: 'movie', loadChildren: () => {
      return import((`/src/app/movie/_modules/movie.module`)).then(m => m.MovieModule);
    }},
  {path: 'movie-my-list', component: MovieMyListComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
