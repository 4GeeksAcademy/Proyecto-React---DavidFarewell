import React from "react";
import styles from "../../styles/Card.module.css";

const Card = (props) => {
    const { image, title, description } = props.cards;
    return (
        <div className={`card h-100 ${styles.card}`}>
            <img src={image} className={`card-img-top ${styles.cardImg}`} alt={title} />
            <div className={`card-body ${styles.cardBody}`}>
                <h5 className={styles.cardTitle}>{title}</h5>
                <p className={styles.cardText}>{description}</p>
                <hr className={styles.divider} />
                {/* 🔹 Reemplazamos "btn btn-primary" por una clase propia para evitar Bootstrap */}
                <button className={styles.cardButton}>Find out More!</button>
            </div>
        </div>
    );
};

export default Card;
