import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailsComponent} from '../_components/movie-details/movie-details.component';
import {MovieRoutingModule} from './movie-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MovieListComponent} from '../_components/movie-list/movie-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,

  ],
  imports: [
    MovieRoutingModule,
    CommonModule,
    RouterModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatGridListModule
  ]
})
export class MovieModule { }
