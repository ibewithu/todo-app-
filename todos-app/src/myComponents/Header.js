import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export const Header = (props) => {
        return (
                <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid">
                                        <Link className="navbar-brand" to="/Todos">{props.title}</Link>

                                        {/* <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                        </button> */}

                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                        <li className="nav-item">
                                                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                                <Link className="nav-link" to="/About">About Us</Link>
                                                        </li>
                                                </ul>

                                                {props.setSearchBar ? <form className="d-flex">
                                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                                </form> : ""}
                                        </div>
                                </div>
                        </nav>
                </div>
        )
}

Header.propTypes = {
        title: "Your Title Here",
        setSearchBar: true
}

Header.propTypes = {
        title: PropTypes.string,
        setSearchBar: PropTypes.bool
}