import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Asset/logo/logo.png';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark "
                style={{
                    background: 'linear-gradient(90deg, #151D31, #1E2A4A)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    padding: '1em',
                }}
            >
                <div className="container-fluid">
                    <p className="navbar-brand text-white mb-0">
                        <img
                            onClick={() => navigate('/')}
                            className="cursor-pointer"
                            width="140px"
                            src={Logo}
                            alt="the logo"
                            style={{ cursor: 'pointer' }}
                        />
                    </p>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link
                                    to="/"
                                    className="nav-link text-white fw-bold"
                                    style={{ fontSize: '1.1rem' }}
                                >
                                    <i className="bi bi-house-door me-2"></i>Home
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link
                                    to="/about"
                                    className="nav-link text-white fw-bold"
                                    style={{ fontSize: '1.1rem' }}
                                >
                                    <i className="bi bi-info-circle me-2"></i>About
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link
                                    to="/apartment"
                                    className="nav-link text-white fw-bold"
                                    style={{ fontSize: '1.1rem' }}
                                >
                                    <i className="bi bi-building me-2"></i>Our Apartments
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link
                                    to="/contact"
                                    className="nav-link text-white fw-bold"
                                    style={{ fontSize: '1.1rem' }}
                                >
                                    <i className="bi bi-telephone me-2"></i>Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;