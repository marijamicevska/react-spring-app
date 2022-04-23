package lab.emt.service.impl;

import lab.emt.model.Country;
import lab.emt.repository.CountryRepository;
import lab.emt.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public void addCountry(String name, String continent){
        Country country = new Country(name, continent);
        countryRepository.save(country);

    }


    @Override
    public List<Country> findAll(){
        return countryRepository.findAll();
    }
}
