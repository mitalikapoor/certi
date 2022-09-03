import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-sm fixed-top bg-white" >
            <div className="container my-2">
                <Link to="/" className="navbar-brand text-dark font-weight-bold" style={{flexGrow: "1",}}>
                    Mitali Kapoor
                </Link>

                <button className="btn btn-outline-info ml-auto px-2" >
                    <Link to="/certi">Certificate</Link>
                </button>

                <button 
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#collapseNav">
                    <span className="fas fa-bars text-dark" ></span>
                </button>

                <div className="collapse navbar-collapse" style={{flexGrow: "0",}}  id="collapseNav">
                    <div className="navbar-nav ">
                        <a href="/" className="nav-item nav-link text-dark font-weight-bold mx-3">
                            Blogs
                        </a>
                    </div>
                    <div className="navbar-nav ">
                        <a href="/" className="nav-item nav-link text-dark font-weight-bold mx-3">
                            Designs
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;