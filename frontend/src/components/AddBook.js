import React from "react";
import {useNavigate} from "react-router-dom";

const AddBook = (props) => {

    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        name: "",
        category: 1,
        author: 1,
        availableCopies: 0
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value.trim()
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const name = formData.name;
        const availableCopies = formData.availableCopies;
        const author = formData.author;
        const category = formData.category;

        props.onAddBook(name, category, author, availableCopies);
        navigate('/books');
    }

    return (
        <div className={"container mt-5"}>
            <h2>Add a new Book</h2>
            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label>Book Title</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Book Title"
                           onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Available copies</label>
                    <input type="number" className="form-control" id="availableCopies" name="availableCopies"
                           placeholder="Available copies" onChange={handleChange}/>
                </div>

                <div className={"form-group"}>
                    <label>Author</label>
                    <select name="author" className="form-control" onChange={handleChange}>
                        {props.authors.map((term) =>
                            <option key={term.id} value={term.id}>{term.name} {term.surname}</option>
                        )}
                    </select>
                </div>

                <div className={"form-group"}>
                    <label>Category</label>
                    <select name="category" className="form-control" onChange={handleChange}>
                        {props.categories.map((term) =>
                            <option key={term.id} value={term.id}>{term}</option>
                        )}
                    </select>
                </div>
                <button id="submit" type="submit" className="btn btn-outline-dark mt-3">Submit</button>
            </form>
        </div>
    );
}

export default AddBook;