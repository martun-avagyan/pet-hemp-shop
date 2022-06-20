import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      justifyContent: "center",
      gap: "14px",
    },
    bullet: {
      background: "#F1F2F7",
      height: "5px",
      width: "40px",
      "&.active": {
        background: "#067D7B",
      },
    },
  },
  {
    name: "pagination",
  }
);

export default useStyles;
