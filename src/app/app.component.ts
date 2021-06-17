import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BooksService } from './services/books.service';
import { addBook, removeBook, retrievedBookList } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: BooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}
