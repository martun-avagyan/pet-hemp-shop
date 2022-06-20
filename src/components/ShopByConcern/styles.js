import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "1280px",
      justifyContent: "center",
      margin: "130px auto",
    },
    cards: {
      width: "100%",
      display: "flex",
      gap: "28px",
    },
    title: {
      marginLeft: "189px",
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontSize: "35px",
      lineHeight: "130%",
      letterSpacing: "-0.01em",
    },
    icon: {
      width: "60px",
      height: "60px",
    },
    info: {
      fontSize: "22px",
      fontWeight: 500,
      lineHeight: "35px",
      color: "#262626",
    },
  },
  {
    name: "shop-by-concern",
  }
);

export default useStyles;
