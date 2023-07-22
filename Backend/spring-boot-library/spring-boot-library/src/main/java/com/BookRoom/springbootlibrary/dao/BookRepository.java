package com.BookRoom.springbootlibrary.dao;

import com.BookRoom.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
