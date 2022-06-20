import React from "react";
import Card from "../Card";
import REVIEWS from "./constants";
import star from "./../../assets/star.svg";
import filledStar from "./../../assets/filledStar.svg";
import Pagination from "../Pagination/Pagination";
import useStyles from "./styles";

const stars = [1, 2, 3, 4, 5];
function Reviews() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          {REVIEWS.map(({ id, image, score, info, reviews }) => (
            <Card key={id} isReview>
              <img className={styles.image} src={image} alt="" />
              <div className={styles.infoHolder}>
                <span className={styles.info}>{info}</span>
                <span className={styles.score}>{score.toFixed(1)}</span>
                <span className={styles.starsHolder}>
                  {stars.map((item) => (
                    <img
                      alt="Rating Stars"
                      className={styles.star}
                      src={item < score ? filledStar : star}
                    />
                  ))}
                </span>
              </div>
              <div className={styles.reviews}>Reviews {reviews}</div>
            </Card>
          ))}
        </div>
      </div>
      <Pagination stepsCount={5} activeStep={2} />
    </>
  );
}

export default Reviews;
