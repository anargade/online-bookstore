import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Book } from '../common/book';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BookCategory } from '../common/book-category';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/api/v1/books';
  private categoryUrl = 'http://localhost:8080/api/v1/book-category';
  constructor(private httpClient:HttpClient) { }

  getBooks(theCategoryId:number):Observable<Book[]>{
    const searchUrl = `${this.baseUrl}/search/categoryId?id=${theCategoryId}`;
    return this.httpClient.get<getResponseBooks>(searchUrl).pipe(
      map(response => response._embedded.books)
    );
  }


  getBookCategories():Observable<BookCategory[]>{
    //const searchUrl = `${this.baseUrl}/search/categoryId?id=${theCategoryId}`;
    return this.httpClient.get<getResponseBookCategoriey>(this.categoryUrl).pipe(
      map(response => response._embedded.bookCategory)
    );
  }

}

interface getResponseBooks{
  _embedded: {
    books: Book[];
  }
}

interface getResponseBookCategoriey{
  _embedded: {
    bookCategory: BookCategory[];
  }
}