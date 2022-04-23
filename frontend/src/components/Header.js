import React from "react";
import '../index.css';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg mt-3" id="navBar">
            <div className="container-fluid">
                <div className="col-1"></div>
                <a className="navbar-brand col-8" href="http://localhost:3000/books">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/books">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/authors">Authors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/categories">Categories</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;