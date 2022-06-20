import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "@global": {
      body: {
        margin: 0,
      },
    },
  },
  {
    name: "app",
  }
);

export default useStyles;
