import { Book } from './../../model/book.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const bookFeatureKey = 'book';

export interface State extends EntityState<Book> {
  error?: any;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({

});


export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => state),
  on(BookActions.loadBooksSuccess, (state, { books }) => adapter.setAll(books, state)),
  on(BookActions.loadBooksFailure, (state, { error }) => ({ ...state, error })),

);

