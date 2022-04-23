package lab.emt.service;

import lab.emt.model.Country;

import java.util.List;

public interface CountryService {
    void addCountry(String name, String continent);

    List<Country> findAll();
}
