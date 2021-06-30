import { createAction, props } from '@ngrx/store';

export const loadCollections = createAction(
  '[Collection] Load Collections'
);

export const loadCollectionsSuccess = createAction(
  '[Collection] Load Collections Success',
  props<{ data: any }>()
);

export const loadCollectionsFailure = createAction(
  '[Collection] Load Collections Failure',
  props<{ error: any }>()
);
