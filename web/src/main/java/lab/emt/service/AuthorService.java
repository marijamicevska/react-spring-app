package lab.emt.service;

import lab.emt.model.Author;
import lab.emt.model.Country;

import java.util.List;

public interface AuthorService {
    void addAuthor(String name, String surname, Country country);

    List<Author> findAll();

    Author getById(Long id);
}
