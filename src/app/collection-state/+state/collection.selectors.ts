import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCollection from './collection.reducer';

export const selectCollectionState = createFeatureSelector<fromCollection.State>(
  fromCollection.collectionFeatureKey
);

const { selectIds } = fromCollection.adapter.getSelectors();

export const selectBookIds = createSelector(
  selectCollectionState,
  (state: fromCollection.State) => state.bookIds
);
