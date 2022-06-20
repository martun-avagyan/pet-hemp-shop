import React from "react";
import image1 from "./../../assets/img1.png";
import image2 from "./../../assets/img2.png";
import image3 from "./../../assets/img3.png";
import image4 from "./../../assets/img4.png";
import image5 from "./../../assets/img5.png";
import useStyles from "./style";

function ImageGrid() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <img className={styles.image1} alt="Hemp Products" src={image1} />
        <img className={styles.image2} alt="Glycerine Product" src={image2} />
        <img className={styles.image3} src={image3} alt="dog with a man" />
        <img className={styles.image4} src={image4} alt="another dog" />
        <img className={styles.image5} src={image5} alt="yet another dog" />
      </div>
    </div>
  );
}

export default ImageGrid;
