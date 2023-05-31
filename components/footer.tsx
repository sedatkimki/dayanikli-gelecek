import { createStyles, Anchor, Group, ActionIcon, rem, Title, Container } from '@mantine/core';
import { IconBrandTwitter, IconBrandInstagram, IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBlock: theme.spacing.md,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export default function Footer({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Link href={link.link} passHref legacyBehavior>
      <Anchor<'a'> color="dimmed" key={link.label} sx={{ lineHeight: 1 }} size="sm">
        {link.label}
      </Anchor>
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container size={900}>
        <div className={classes.inner}>
          <Title className={classes.title}>DayanikliGelecek</Title>
          <Group className={classes.links}>{items}</Group>

          <Group spacing="xs" position="right" noWrap>
            <Link href="https://twitter.com/daynikligelecek" passHref legacyBehavior>
              <ActionIcon component="a" target="_blank" size="lg" variant="default" radius="xl">
                <IconBrandTwitter size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link href="https://instagram.com" passHref legacyBehavior>
              <ActionIcon component="a" target="_blank" size="lg" variant="default" radius="xl">
                <IconBrandInstagram size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link href="https://github.com/sedatkimki/dayanikli-gelecek" passHref legacyBehavior>
              <ActionIcon component="a" target="_blank" size="lg" variant="default" radius="xl">
                <IconBrandGithub size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Link>
          </Group>
        </div>
      </Container>
    </div>
  );
}
