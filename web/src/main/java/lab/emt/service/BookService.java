package lab.emt.service;

import lab.emt.model.Author;
import lab.emt.model.Book;
import lab.emt.model.Category;

import java.util.List;
import java.util.Optional;

public interface BookService {

    List<Book> findAll();

    Optional<Book> findById(Long id);

    void addBook(String name, Category category, Author author, Integer availableCopies);

    void editBook(Long id, String name, Category category, Author author);

    void deleteBook(Long id);

    void takeBook(Long id);
}
