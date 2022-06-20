import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      position: "relative",
      background: "#067D7B",
      height: "264px",
      marginTop: "260px",
    },
    image: {
      position: "absolute",
      width: "569px",
      height: "347px",
      left: "89px",
      bottom: "21.5px",
    },
    infoSection: {
      margin: [50, 0],
      display: "flex",
      flexDirection: "column",
      paddingLeft: "734px",
    },
    title: {
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "32px",
      color: "#FFFFFF",
    },
    description: {
      fontFamily: "Roboto",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "190%",
      color: "#FFFFFF",
    },
    inputSection: {
      width: "517px",
      display: "flex",
      height: "54px",
      marginTop: "30px",
      gap: "10px",
    },
    input: {
      fontFamily: "Roboto",
      width: "280px",
      border: "1px solid #C5C7D3",
      borderRadius: "2px",
      alignItems: "center",
      padding: "10px 20px",
      color: "#FFFFFF",
      background: "#067D7B",
      "&::placeholder": {
        color: "#FFFFFF",
      },
    },
    buttonStyles: {
      fontSize: "18px",
      padding: [10, 20, 10, 20],
    },
  },
  {
    name: "subscribe-section",
  }
);

export default useStyles;
