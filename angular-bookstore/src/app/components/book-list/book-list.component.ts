import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = null;
  currentCategorId:number;
  constructor(private bookService:BookService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(()=>{
      this.listBooks();
    })
  }

  listBooks(){
    const hasCategoryId: boolean = this.activatedRoute.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategorId = +this.activatedRoute.snapshot.paramMap.get('id');
    }else{
      this.currentCategorId = 1;
    }
    this.bookService.getBooks(this.currentCategorId).subscribe(
      data=> this.books = data
    )
  }
}
