import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

const BookTerm = (props) => {
    return (
        <tr>
            <td className={"itemName"}>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td>
                <Link className="btn btn-light" onClick={() => props.onEdit(props.term.id)} to={`books/edit/${props.term.id}`} >Edit</Link>
                <a title={"Delete"} className="btn btn-light" key={props.term.id} onClick={() => props.onDelete(props.term.id)}>Delete</a>
                <a title={"Mark as taken"} className="btn btn-sm btn-outline-info" onClick={() => props.onBookTaken(props.term.id)}>Mark as taken</a>
            </td>
        </tr>
    )
}

export default BookTerm;
