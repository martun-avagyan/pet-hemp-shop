import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      display: "flex",
      justifyContent: "center",
      margin: [130, 80],
    },
    wrapper: {
      maxWidth: "1280px",
      display: "grid",
      gap: "28px",
      grid: `'left right1 right2' 1fr 'left right3 right4' 1fr / 2.1fr 1fr 1fr`,
      "& > img": {
        width: "100%",
      },
    },
    image1: {
      gridArea: "left",
    },
    image2: {
      gridArea: "right1",
    },
    image3: {
      gridArea: "right2",
    },
    image4: {
      gridArea: "right3",
    },
    image5: {
      gridArea: "right4",
    },
  },
  {
    name: "button",
  }
);

export default useStyles;
