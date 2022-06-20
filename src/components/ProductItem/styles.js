import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "299px",
      height: "518px",
      gap: "20px",
    },
    imageBlock: {
      height: "344px",
      "& > img": {
        width: "100%",
        height: "100%",
      },
    },
    info: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    title: {
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "160%",
      letterSpacing: "-0.01em",
      color: "#262626",
    },
    category: {
      fontFamily: "Roboto",
      marginTop: "10px",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "200%",
      color: " #484C56",
    },
    infoWrapper: {
      display: "flex",
      flexDirection: "column",
    },
    price: {
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "160%",
      letterSpacing: "-0.01em",
      color: "#262626",
    },
  },
  {
    name: "product-item",
  }
);

export default useStyles;
