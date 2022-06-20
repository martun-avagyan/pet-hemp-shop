import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#FFFFFF",
      boxShadow: "0px 10px 16px rgba(139, 143, 167, 0.2)",
      borderRadius: "2px",
      padding: "20px",
      width: "299px",
      gap: "20px",
      height: "175px",
      "&.review": {
        gap: "10px",
        height: "151px",
        width: "276px",
        marginBottom: "20px",
        alignItems: "flex-start",
      },
    },
  },
  {
    name: "card",
  }
);

export default useStyles;
