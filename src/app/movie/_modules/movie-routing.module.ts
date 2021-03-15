import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailsComponent} from '../_components/movie-details/movie-details.component';
import {MovieListComponent} from '../_components/movie-list/movie-list.component';

const routes: Routes = [

  {path: 'list', component: MovieListComponent},
  {path: 'details/:id', component: MovieDetailsComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class MovieRoutingModule {
}
