import { Group } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Links } from "../../data/pages.data";
import useStyles from "./Header.style";

type Props = {
  links: Links;
};

export const Tabs = ({ links }: Props) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(links[0].link);
  const { push, pathname } = useRouter();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <Group className={classes.links} spacing={5}>
      {links.map((link) => (
        <Link key={link.label} href={link.link} passHref>
          <a
            className={cx(classes.link, {
              [classes.linkActive]: active === link.link,
            })}
            onClick={(event) => {
              event.preventDefault();
              push(link.link);
            }}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </Group>
  );
};
