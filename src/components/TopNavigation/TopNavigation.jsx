import React from "react";
import TOP_NAVIGATION_ITEMS from "./constants";
import logo from "./../../assets/logo.svg";
import search from "./../../assets/searchIcon.svg";
import profile from "./../../assets/profile.svg";
import cart from "./../../assets/cart.svg";
import close from "./../../assets/close.svg";
import useStyles from "./styles";
import useMobile from "../../hooks/useMobile";

function TopNavigation() {
  const styles = useStyles();
  const isMobile = useMobile();
  return (
    <div className={styles.root}>
      <div>
        <img src={logo} alt="" />
      </div>
      {!isMobile &&
        TOP_NAVIGATION_ITEMS.map(({ name, link, id }) => (
          <a className={styles.navItem} href={link} key={id}>
            {name}
          </a>
        ))}
      <div>
        <img src={search} alt="search" />
      </div>
      <div>
        <img src={profile} alt="profile" />
      </div>
      <div className={styles.cart}>
        <div>2 - $56.90</div>
        <img src={cart} alt="cart" />
      </div>
      {isMobile && (
        <div>
          <img alt="close" src={close} className={styles.close} />
        </div>
      )}
    </div>
  );
}

export default TopNavigation;
