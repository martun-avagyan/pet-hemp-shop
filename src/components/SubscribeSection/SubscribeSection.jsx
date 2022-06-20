import React from "react";
import Button from "../Button";
import subscribe from "./../../assets/subscribe.png";
import useStyles from "./style";

function SubscribeSection({ children, type }) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <img className={styles.image} src={subscribe} alt="cream" />
      <div className={styles.infoSection}>
        <div className={styles.title}>Subscribe to Newsletter</div>
        <div className={styles.description}>
          Subscribe to our newsletter & stay updated
        </div>
        <div className={styles.inputSection}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your email"
          />
          <Button className={styles.buttonStyles} type="secondary">
            Subscribe now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;
