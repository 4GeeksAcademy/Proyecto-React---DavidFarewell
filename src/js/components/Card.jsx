import React from "react";
import styles from "../../styles/Card.module.css";

const Card = (props) => {
    const { image, title, description } = props.cards;
    return (
        <div className={`card h-100 ${styles.card}`}>
            <img src={image} className={`card-img-top ${styles.cardImg}`} alt={title} />
            <div className={`card-body ${styles.cardBody}`}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <hr className={styles.divider} />
                <button className="btn btn-primary">Find out More!</button>
            </div>
        </div>
    );
};

export default Card;
