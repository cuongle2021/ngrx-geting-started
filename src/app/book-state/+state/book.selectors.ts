import { selectBookIds } from './../../collection-state/+state/collection.selectors';
import { Book } from './../../model/book.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

const { selectAll } = fromBook.adapter.getSelectors();

export const getAllBooks = createSelector(
  selectBookState,
  (state: fromBook.State) => selectAll(state)
);

export const getBookCollection = createSelector(
  getAllBooks,
  selectBookIds,
  (books: Book[], collection: string[]) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
)
