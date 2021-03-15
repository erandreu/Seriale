import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMyListComponent } from './movie-my-list.component';

describe('MovieMyListComponent', () => {
  let component: MovieMyListComponent;
  let fixture: ComponentFixture<MovieMyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieMyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
