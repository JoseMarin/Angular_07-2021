import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
  }

  saveBook(): void {
    const data = {
      title: this.book.title,
      description: this.book.description
    };

    this.booksService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBook(): void {
    this.submitted = false;
    this.book = {
      title: '',
      description: '',
      published: false
    };
  }

}
