import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CollectionActions from './collection.actions';



@Injectable()
export class CollectionEffects {

  loadCollections$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CollectionActions.loadCollections),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CollectionActions.loadCollectionsSuccess({ data })),
          catchError(error => of(CollectionActions.loadCollectionsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
