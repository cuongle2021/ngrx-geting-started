import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCollection from './+state/collection.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CollectionEffects } from './+state/collection.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCollection.collectionFeatureKey, fromCollection.reducer),
    EffectsModule.forFeature([CollectionEffects])
  ]
})
export class CollectionStateModule { }
