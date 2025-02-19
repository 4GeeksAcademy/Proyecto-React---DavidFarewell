import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import styles from "../../styles/Home.module.css";

const cards = [
    { image: "https://picsum.photos/id/10/200/300", title: "Parque", description: "Parque" },
    { image: "https://picsum.photos/id/17/200/300", title: "Sendero", description: "Sendero" },
    { image: "https://picsum.photos/id/28/200/300", title: "Bosque", description: "Bosque" },
    { image: "https://picsum.photos/id/54/200/300", title: "Montaña", description: "Montaña" }
];

const Home = () => {
    return (
        <div className={`text-center ${styles.container}`}>
            <Navbar />
            <Jumbotron />
            <div className="container">
                <div className={`row ${styles.row}`}>
                    {cards.map((item, index) => (
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
