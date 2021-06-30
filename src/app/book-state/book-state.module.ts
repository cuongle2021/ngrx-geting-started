import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './+state/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './+state/book.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects]),
  ]
})
export class BookStateModule { }
