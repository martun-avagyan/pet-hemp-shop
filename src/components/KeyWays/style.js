import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      maxWidth: "1280px",
      margin: "130px auto",
      justifyContent: "center",
      gap: "40px",
    },
    item: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "249px",
      height: "163px",
    },
    icon: {
      position: "absolute",
      left: "-50px",
      width: "40px",
      height: "40px",
    },
    wrapper: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "78px",
    },
    heading: {
      marginLeft: "189px",
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontSize: "35px",
      lineHeight: "130%",
    },
    title: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: "35px",
      color: "#262626",
    },
    article: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "200%",
      color: "#484C56",
    },
  },
  {
    name: "button",
  }
);

export default useStyles;
