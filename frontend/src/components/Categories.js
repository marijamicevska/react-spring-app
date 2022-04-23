import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Categories = (props) => {
    return (
        <div className={"container m-5"}>
            <h1>All Categories</h1>

            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Category</th>
                </tr>
                </thead>
                <tbody>
                {props.categories.map((item) => {
                    return (
                        <tr>
                            <td className={"itemName"}>{item}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Categories;