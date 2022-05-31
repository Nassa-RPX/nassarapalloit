import React from "react";
import { AppShell, useMantineColorScheme } from "@mantine/core";
import { Children } from "../../types";
import { Header } from "../Header/Header.component";

import { useStyles } from "./Layout.styles";

type Props = Children;

export const Layout = ({ children }: Props) => {
  const { classes } = useStyles();

  return (
    <AppShell
      padding="md"
      header={
        <Header
          links={[
            { link: "/", label: "Home" },
            { link: "/associazione", label: "Associazione" },
          ]}
        />
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[1],
        },
      })}
      classNames={{ ...classes }}
    >
      {children}
    </AppShell>
  );
};
