import { createUseStyles } from "react-jss";
import { BreakPoints } from "../../utils/breakPoints";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      flexDirection: "column",
      marginTop: "132px",
      maxWidth: "1280px",
      justifyContent: "center",
      margin: "auto",
    },
    products: {
      display: "flex",
      gap: "28px",
      [`@media (max-width: ${BreakPoints.Medium}px)`]: {
        flexDirection: "column",
      },
    },
    title: {
      fontFamily: "Montserrat",
      fontWeight: 700,
      margin: "0 189px 40px 189px",
    },
  },
  {
    name: "popular-products",
  }
);

export default useStyles;
