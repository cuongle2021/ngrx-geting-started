import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addBook, loadBooks, removeBook } from './book-state/+state/book.actions';
import { getAllBooks, getBookCollection } from './book-state/+state/book.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books$ = this.store.pipe(select(getAllBooks));
  bookCollection$ = this.store.pipe(select(getBookCollection));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(loadBooks());
  }
}
