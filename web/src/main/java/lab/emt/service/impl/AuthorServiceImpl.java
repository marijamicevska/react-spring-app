package lab.emt.service.impl;

import lab.emt.model.Author;
import lab.emt.model.Country;
import lab.emt.repository.AuthorRepository;
import lab.emt.service.AuthorService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public void addAuthor(String name, String surname, Country country){
        Author author = new Author(name, surname, country);
        authorRepository.save(author);
    }

    @Override
    public List<Author> findAll(){
        return authorRepository.findAll();
    }

    @Override
    public Author getById(Long id){
        return authorRepository.getById(id);
    }

}
