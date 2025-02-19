import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ background: "#151D31", color: "white", padding: "1em" }}>
                <div className="container-fluid ">
                    <p className="navbar-brand text-white">Logo</p>
                    <button className="text-white navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white bg-white bg-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                              <Link to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="/apartment">Our Apartments</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
