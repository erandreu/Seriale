import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MovieListComponent } from './movie/_components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie/_components/movie-details/movie-details.component';
import { MovieMyListComponent } from './movielist/_components/movie-my-list/movie-my-list.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MovieModule} from './movie/_modules/movie.module';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    MovieMyListComponent,
  ],
    imports: [
      BrowserModule,
      RouterModule,
      HttpClientModule,
      AppRoutingModule,
      MovieModule,
      BrowserAnimationsModule,
      MatTableModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      FormsModule,
      MatGridListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
