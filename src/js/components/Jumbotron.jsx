import React from "react";
import styles from "../../styles/Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={styles.jumbotronContainer}>
            <div className={styles.jumbotronContent}>
                <h1 className={styles.jumbotronTitle}>Si eres como yo y te faltan huevos... ¡Esta es tu web!</h1>
                <p className={styles.jumbotronText}>
                ¿Alguna vez has sentido miedo? ¿Te han faltado agallas para hacer algo o declararte a tu crush? No te preocupes, ¡nosotros te cubrimos! Aquí encontrarás huevos para cualquier situación que puedas imaginar. ¡No te quedes sin ellos! Date prisa y compra… ¿o no hay huevos? 😉
                </p>
                <button className={styles.jumbotronButton}>¡Reserva los tuyos aquí!</button>
            </div>
        </div>
    );
};

export default Jumbotron;
