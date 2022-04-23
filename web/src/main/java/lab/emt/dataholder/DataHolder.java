package lab.emt.dataholder;

import lab.emt.model.Author;
import lab.emt.model.Book;
import lab.emt.model.Category;
import lab.emt.model.Country;
import lab.emt.repository.AuthorRepository;
import lab.emt.repository.BookRepository;
import lab.emt.repository.CountryRepository;
import lombok.Getter;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
@Getter
public class DataHolder {

    public static List<Author> authors = new ArrayList<>();
    public static List<Country> countries = new ArrayList<>();
    public static List<Book> books = new ArrayList<>();
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;
    private final CountryRepository countryRepository;

    public DataHolder(BookRepository bookRepository, AuthorRepository authorRepository, CountryRepository countryRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
        this.countryRepository = countryRepository;
    }


    @PostConstruct
    public void init() {

        countries.add(new Country("UK", "Europe"));
        countries.add(new Country("Germany", "Europe"));
        countries.add(new Country("Canada", "North America"));
        countries.add(new Country("Japan", "Asia"));

        authors.add(new Author("J.K.", "Rowling", countries.get(0)));
        authors.add(new Author("J. R. R.", "Tolkien", countries.get(0)));
        authors.add(new Author("Hermann", "Hesse", countries.get(1)));
        authors.add(new Author("Friedrich", "Nietzsche", countries.get(1)));
        authors.add(new Author("Jordan", "Peterson", countries.get(2)));
        authors.add(new Author("Haruki", "Murakami", countries.get(3)));
        authors.add(new Author("George", "Orwell", countries.get(0)));

        books.add(new Book("1984", Category.NOVEL, authors.get(6),12));
        books.add(new Book("12 Rules for Life", Category.NOVEL, authors.get(4), 15));
        books.add(new Book("The Lord of the Rings", Category.FANTASY, authors.get(1), 15));
        books.add(new Book("Harry Potter and the Philosopher's Stone", Category.FANTASY, authors.get(0), 10));
        books.add(new Book("Harry Potter and the Chamber of Secrets", Category.FANTASY, authors.get(0), 5));
        books.add(new Book("Harry Potter and the Prisoner of Azkaban", Category.FANTASY, authors.get(0), 7));
        books.add(new Book("Harry Potter and the Goblet of Fire", Category.FANTASY, authors.get(0), 3));
        books.add(new Book("Harry Potter and the Order of the Phoenix", Category.FANTASY, authors.get(0), 10));
        books.add(new Book("1Q84", Category.NOVEL, authors.get(5),5));
        books.add(new Book("Steppenwolf", Category.NOVEL, authors.get(2), 8));

        countryRepository.saveAll(DataHolder.countries);
        authorRepository.saveAll(DataHolder.authors);
        bookRepository.saveAll(DataHolder.books);

    }
}

