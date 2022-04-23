import './App.css';
import {Component} from "react";
import labRepository from "../repository/labRepository";
import Books from "./Books";
import Header from "./Header";
import {Route, BrowserRouter, Redirect, Navigate} from "react-router-dom";
import {Routes} from "react-router-dom";
import Authors from "./Authors";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import Categories from "./Categories";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            authors: [],
            categories: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <hr/>
                <BrowserRouter>
                    <Routes>
                        <Route path="books/add" element={<AddBook categories={this.state.categories}
                                                                  authors={this.state.authors}
                                                                  onAddBook={this.addBook}/>}/>
                        <Route path="books/edit/:id" element={<EditBook categories={this.state.categories}
                                                                        authors={this.state.authors}
                                                                        onEdit={this.editBook}
                                                                        book={this.state.selectedBook}/>}/>
                        <Route path="books" element={<Books books={this.state.books} onDelete={this.deleteBook}
                                                            onBookTaken={this.takeBook}
                                                            onEdit={this.getBook}/>}/>

                        <Route path="/" element={<Books books={this.state.books} onDelete={this.deleteBook}
                                                            onBookTaken={this.takeBook}
                                                            onEdit={this.getBook}/>}/>

                        <Route path="authors" element={<Authors authors={this.state.authors}/>}/>
                        <Route path="categories" element={<Categories categories={this.state.categories}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }

    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCategories();
    }

    loadCategories = () => {
        labRepository.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }

    loadBooks = () => {
        labRepository.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            })
    }

    loadAuthors = () => {
        labRepository.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            })
    }

    addBook = (name, category, author, availableCopies) => {
        labRepository.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    editBook = (id, name, category, author, availableCopies) => {
        labRepository.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            })
    }

    deleteBook = (id) => {
        labRepository.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    takeBook = (id) => {
        labRepository.takeBook(id)
            .then(() => {
                this.loadBooks();
            })
    }

    getBook = (id) => {
        labRepository.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

}

export default App;
