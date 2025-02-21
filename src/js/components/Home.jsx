import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import styles from "../../styles/Home.module.css";
import cardsData from "./cardsData.jsx"; 

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Navbar />
            {/* Alinear el Jumbotron con las Cards */}
            <div className={styles.jumbotronWrapper}>
                <Jumbotron />
            </div>
            <div className="container">
                <div className="row">
                    {cardsData.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <Card cards={item} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
