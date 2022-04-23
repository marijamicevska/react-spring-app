import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Authors = (props) => {
    return (
        <div className={"container m-5"}>
            <h1>All Authors</h1>

            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Country</th>
                </tr>
                </thead>
                <tbody>
                {props.authors.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td className={"itemName"}>{item.name} {item.surname}</td>
                            <td>{item.country.name}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Authors;