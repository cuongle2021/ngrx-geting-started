import { Book } from './../../model/book.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as CollectionActions from './collection.actions';
import * as BookActions from '../../book-state/+state/book.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const collectionFeatureKey = 'collection';

export interface State extends EntityState<Book> {
  bookIds: string[];
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  bookIds: []
});


export const reducer = createReducer(
  initialState,

  on(BookActions.addBook,
    (state, { bookId }) => {
      if (state.bookIds.indexOf(bookId) !== -1)
        return state;
      return { ...state, bookIds: [...state.bookIds, bookId]}
    }),
  on(BookActions.removeBook,
    (state, { bookId }) => ({
      ...state,
      bookIds: state.bookIds.filter(id => id !== bookId)
    })
  )
);

