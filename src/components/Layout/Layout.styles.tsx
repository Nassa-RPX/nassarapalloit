import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",

    flexDirection: "column",
  },
  body: {
    flex: 1,
  },
  main: {
    [theme.fn.largerThan("lg")]: {
      padding: "0 20%",
    },
  },
}));
