import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      width: "100%",
      overflow: "auto",
    },
    wrapper: {
      display: "flex",
      marginTop: "9px",
      gap: "28px",
    },
    image: {
      width: "162px",
      height: "40px",
    },
    star: {
      width: "16px",
      height: "16px",
    },
    starsHolder: {
      display: "flex",
      gap: "5px",
    },
    infoHolder: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    score: {
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "35px",
      color: "#067D7B",
    },
    info: {
      fontFamily: "Roboto",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "190%",
      color: "#262626",
    },
    reviews: {
      fontFamily: "Roboto",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "25px",
      color: "#484C56",
    },
  },
  {
    name: "reviews",
  }
);

export default useStyles;
