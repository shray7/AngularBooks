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
    this.Books = [
      {
        Title : 'The Top 1%', Author : 'Dan Strutzel', Description: 'Lorem ipsum'
      },
      {
        Title: 'Think and Grow Rich', Author: 'Napoleon Hill', Description: 'Lorem ipsum'
      }
    ]
  }

}
