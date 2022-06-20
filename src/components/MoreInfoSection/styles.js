import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: "1280px",
      margin: "auto",
    },
    section: {
      display: "flex",
      alignItems: "center",
    },
    leftImage: {
      width: "853px",
      height: "488px",
    },
    rightImage: {
      width: "900px",
      height: "425px",
      marginRight: "-100px",
    },
    content: {
      marginLeft: "-100px",
    },
    leftContent: {
      // marginLeft: '100px',
    },
    icon: {
      width: "33px",
      height: "40px",
    },
    title: {
      margin: [10, 0, 5, 0],
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "130%",
      color: "#262626",
    },
    description: {
      marginBottom: "30px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "190%",
      color: "#484C56",
    },
    button: {
      width: "100%",
    },
  },
  {
    name: "more-info",
  }
);

export default useStyles;
