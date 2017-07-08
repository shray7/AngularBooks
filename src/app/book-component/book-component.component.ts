import { Component, OnInit } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {
  Books: Book[];
  constructor() { }

  ngOnInit() {
    this.Books = new Array<Book>();
    this.Books[0] = new Book();
    this.Books[0].Title = 'The Top 1%';
    this.Books[0].Author = 'Dan Strutzel';
  }

}
