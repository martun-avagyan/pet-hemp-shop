import { createUseStyles } from "react-jss";
import { BreakPoints } from "../../utils/breakPoints";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      height: "90px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: [0, 80],
      backgroundColor: "#fff",
      gap: "53px",
    },
    navItem: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "190%",
      textDecoration: "none",
      color: "#262626",
      [`@media (max-width: ${BreakPoints.Large}px)`]: {
        display: "none",
      },
    },
    cart: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& > div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#EDF7F7",
        borderRadius: "2px 0px 0px 2px",
        height: "54px",
        width: "122px",
      },
    },
    close: {},
  },
  {
    name: "top-navigation",
  }
);

export default useStyles;
