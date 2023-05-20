import { createStyles, Text, Box, Stack, Anchor } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconAt } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[9],
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[9],
  },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  link: string;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  link,
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      <Box mr="md" className={classes.icon}>
        <Icon size="1.5rem" />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Link href={link} passHref legacyBehavior>
          <Anchor target="_blank" color="dimmed">
            <Text color="dimmed">{description}</Text>
          </Anchor>
        </Link>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
}

const MOCKDATA = [
  {
    title: 'Email',
    description: 'hello@dayanikligelecek.dev',
    icon: IconAt,
    link: 'mailto:korkmz.sedat@gmail.com',
  },
  {
    title: 'Instagram',
    description: '@dayanikligelecek',
    icon: IconBrandInstagram,
    link: 'https://www.instagram.com/dayanikligelecek/',
  },
  {
    title: 'Twitter',
    description: '@dayanikligelecek',
    icon: IconBrandTwitter,
    link: 'https://twitter.com/dayanikligelecek',
  },
];

export default function ContactIconsList({ data = MOCKDATA }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
