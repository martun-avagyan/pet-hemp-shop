import leaves from "./../../assets/leaves.png";
import leaf from "./../../assets/leaf.svg";
import badge from "./../../assets/badge.svg";
import Button from "../Button";
import useStyles from "./styles";

function TrustedGuarantee() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.leftContent}>
          <img className={styles.badge} alt="" src={badge} />
          <div className={styles.leftTitle}>Our Trusted Guarantee</div>
          <div className={styles.leftDescription}>
            {" "}
            We stand behind our product and offer a 30-day, no questions asked,
            money back guarantee
          </div>
          <Button>Show now</Button>
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.leaves} alt="" src={leaves} />
        <div className={styles.rightContent}>
          <div>
            <img className={styles.leaf} alt="" src={leaf} />
          </div>
          <div className={styles.rightTitle}>All natural</div>
          <div className={styles.rightDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedGuarantee;
