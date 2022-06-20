import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      background: "#067D7B",
      borderRadius: "2px",
      padding: "17px 25px",
      border: "none",
      color: "#fff",
      fontWeight: 700,
      fontSize: "22px",
      lineHeight: "26px",
      "&.secondary": {
        background: "#fff",
        color: "#067D7B",
      },
    },
  },
  {
    name: "button",
  }
);

export default useStyles;
