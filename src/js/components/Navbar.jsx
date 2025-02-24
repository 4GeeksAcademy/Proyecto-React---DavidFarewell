import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
            <div className="container">
                <a className={`navbar-brand ${styles.navbarBrand}`} href="#">🥚 HUEVÓPOLIS</a>
                <button 
                    className="navbar-toggler"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">Services</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
