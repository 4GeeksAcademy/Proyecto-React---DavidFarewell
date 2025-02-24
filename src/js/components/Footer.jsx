import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p><small>Copyright &copy; DavidFarewell {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
};

export default Footer;
