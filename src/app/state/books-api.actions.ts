import { Book } from './../model/book.model';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const loadBooksSuccess = createAction(
  '[BooksApi] Load Books success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[BooksApi] Load Books success',
  props<{ error: HttpErrorResponse }>()
);




