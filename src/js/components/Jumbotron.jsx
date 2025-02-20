import React from "react";
import styles from "../../styles/Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={styles.jumbotronContainer}>
            <div className={styles.jumbotronContent}>
                <h1 className={styles.jumbotronTitle}>A Warm Welcome!</h1>
                <p className={styles.jumbotronText}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio 
                    voluptates quia officiis unde nobis neque veniam hic. Sequi totam laudantium, 
                    velit a quaerat deleniti blanditiis facere reiciendis cumque!
                </p>
                <button className={styles.jumbotronButton}>Call to action!</button>
            </div>
        </div>
    );
};

export default Jumbotron;
