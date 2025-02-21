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
                <button className={styles.cardButton}>¡Lo Quiero!</button>
            </div>
        </div>
    );
};

export default Card;
