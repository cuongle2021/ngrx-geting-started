import { Book } from './../model/book.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { BooksService } from '../services/books.service';
import * as BooksActions from './books.actions';
import * as BooksApiAction from './books-api.actions';
import { of } from 'rxjs';


@Injectable()
export class BooksEffects {


  constructor(private actions$: Actions,
    private booksService: BooksService) {}

}
