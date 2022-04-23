import axios from '../custom-axios/axios';

const LabService = {

    fetchBooks: () => {
        return axios.get("/books")
    },

    fetchAuthors: () => {
        return axios.get("/authors")
    },

    fetchCategories: () => {
        return axios.get("/categories")
    },

    deleteBook: (id) => {
        return axios.delete(`/books/${id}`)
    },

    addBook: (name, category, author, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        })
    },

    editBook: (id, name, category, author, availableCopies) => {
        return axios.post(`books/edit/${id}`,{
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies
        })
    },

    takeBook: (id) => {
        return axios.post(`books/takeBook/${id}`)
    },

    getBook: (id) => {
        return axios.get(`books/${id}`)
    }

}

export default LabService;