import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookTerm from "./BookTerm";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import '../index.css';

class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {

        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const count = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooks(offset, nextPageOffset);

        return (
            <div className={"container m-5"}>
                <h1>All Books</h1>
                <Link className={"btn btn-outline-dark"} to={"/books/add"}>Add new book</Link>

                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Author</th>
                        <th scope="col">Available Copies</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books}
                    </tbody>
                </table>
                <ReactPaginate previousLabel={"<< Previous"}
                               nextLabel={"Next >>"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={count}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageChange}
                               containerClassName={"pagination m-4 justify-content-center"}
                               previousLinkClassName={"pagination__link"}
                               nextLinkClassName={"pagination__link"}
                               disabledClassName={"pagination__link--disabled"}
                               activeClassName={"pagination__link--active"}/>

            </div>
        );
    }


    getBooks = (offset, nextPageOffset) => {
        return this.props.books.map((term) => {
            return (
                <BookTerm key={term.id} term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}
                          onBookTaken={this.props.onBookTaken}/>
            )
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        });
    }

    handlePageChange = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }
}


export default Books;