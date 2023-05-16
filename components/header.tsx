import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ColorSchemeToggle } from './ColorSchemeToggle';

const HEADER_HEIGHT = rem(56.25);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    border: 'none',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
  },
  titleLink: {
    textDecoration: 'none',
  },
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export default function HeaderMenu({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Link
          href="/"
          passHref
          className={classes.titleLink}
          onClick={() => {
            setActive('/');
          }}
        >
          <Title className={classes.title}>DayanikliGelecek</Title>
        </Link>
        <Group spacing={7} className={classes.links}>
          {items}
          <ColorSchemeToggle />
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
