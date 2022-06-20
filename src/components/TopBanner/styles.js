import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      justifyContent: "space-around",
      maxWidth: "100%",
      height: "438px",
      background: "#EDF7F7",
      margin: "auto",
    },
    heading: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "130%",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "80px",
      marginBottom: "40px",
    },
    infoItem: {
      fontFamily: "Roboto",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    image: {
      width: "381px",
      height: "auto",
    },
    icon: {},
  },
  {
    name: "top-banner",
  }
);

export default useStyles;
