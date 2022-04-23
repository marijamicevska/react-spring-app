package lab.emt.controller;

import lab.emt.model.Book;
import lab.emt.model.dto.BookDto;
import lab.emt.service.AuthorService;
import lab.emt.service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;
    private final AuthorService authorService;

    public BookController(BookService bookService, AuthorService authorService) {
        this.bookService = bookService;
        this.authorService = authorService;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBook(@PathVariable Long id) {
        return bookService.findById(id).map(product -> ResponseEntity.ok().body(product))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public void createBook(@RequestBody BookDto book) {
       bookService.addBook(book.getName(),book.getCategory(),authorService.getById(book.getAuthor()),book.getAvailableCopies());
    }

    @PostMapping("/edit/{id}")
    public void editBook(@PathVariable Long id, @RequestBody BookDto book) {
        bookService.editBook(id,book.getName(),book.getCategory(),authorService.getById(book.getAuthor()));
    }

    @PostMapping("/takeBook/{id}")
    public void takeBook(@PathVariable Long id){
        bookService.takeBook(id);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }
}
