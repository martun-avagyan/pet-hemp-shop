import React from "react";
import pattern from "./../../assets/pattern.png";
import dog from "./../../assets/dog.png";
import Button from "../Button";
import useStyles from "./styles";

const story = {
  title: "Our Story",
  description:
    "Starting Pet Hemp Company was inspired by our family dog, Woody, " +
    "a grey-haired labradoodle who graced our lives for over 13 years. " +
    "We often referred to him as the “mayor” because he was so friendly with other animals." +
    " Woody’s best friend in the world was our cat Frankie. " +
    "Every evening we would find the two of them playing together even though Woody was 90 pounds and Frankie was 12 pounds." +
    "This past summer Woody’s age began to catch up with him.",
};

function OurStory() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.imageBlock}>
        <img className={styles.pattern} src={pattern} alt="" />
        <img className={styles.dog} src={dog} alt="" />
      </div>
      <div className={styles.story}>
        <div className={styles.title}>{story.title}</div>
        <div className={styles.description}>{story.description}</div>
        <Button type="secondary">Learn more</Button>
      </div>
    </div>
  );
}

export default OurStory;
