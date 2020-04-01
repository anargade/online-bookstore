package com.ashkalp.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ashkalp.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
