import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      margin: [116, 0, 130, 0],
      padding: [0, 112, 0, 112],
      background: "#067D7B",
      boxShadow: "0px 13px 25px rgba(139, 143, 167, 0.22)",
      height: "527px",
      justifyContent: "space-around",
    },
    imageBlock: {
      marginTop: "30px",
      position: "relative",
    },
    pattern: {
      width: "619.67px",
      height: "528.48px",
    },
    dog: {
      position: "absolute",
      width: "367px",
      height: "497px",
      left: "72px",
    },
    story: {
      maxWidth: "510px",
      maxHeight: "407px",
      display: "flex",
      flexDirection: "column",
      margin: [60, 0],
      color: "#FFFFFF",
    },
    title: {
      fontFamily: "Montserrat",
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "130%",
      letterSpacing: "-0.01em",
      marginBottom: "10px",
    },
    description: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "190%",
      marginBottom: "30px",
    },
  },
  {
    name: "our-story",
  }
);

export default useStyles;
