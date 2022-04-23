package lab.emt.controller;


import lab.emt.model.Category;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/categories")
public class CategoryController {

    @GetMapping
    public List<Category> getAllCategories(){
        List<Category> categories = new ArrayList<>();
        categories.add(Category.CLASSICS);
        categories.add(Category.DRAMA);
        categories.add(Category.NOVEL);
        categories.add(Category.THRILLER);
        categories.add(Category.BIOGRAPHY);
        categories.add(Category.FANTASY);
        categories.add(Category.HISTORY);
        return categories;
    }
}
