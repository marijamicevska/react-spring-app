package lab.emt.service.impl;

import lab.emt.model.Author;
import lab.emt.model.Book;
import lab.emt.model.Category;
import lab.emt.repository.BookRepository;
import lab.emt.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public void addBook(String name, Category category, Author author, Integer availableCopies) {
        Book book = new Book(name, category, author, availableCopies);
        bookRepository.save(book);
    }

    @Override
    public void editBook(Long id, String name, Category category, Author author) {
        Book book = bookRepository.getById(id);
        book.setName(name);
        book.setCategory(category);
        book.setAuthor(author);
        bookRepository.save(book);
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public void takeBook(Long id) {
        Book book = bookRepository.getById(id);
        if (book.getAvailableCopies() > 0)
            book.setAvailableCopies(book.getAvailableCopies() - 1);
        bookRepository.save(book);
    }
}
