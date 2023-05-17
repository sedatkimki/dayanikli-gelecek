import { Flex, Image, Title, Text, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    paddingTop: rem(8),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    fontWeight: 700,
  },
  date: {
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(12),
  },
  desc: {
    paddingTop: rem(8),
  },
}));

interface PostCardProps {
  title: string;
  image: string;
  date: string;
  desc: string;
}

export default function PostCard({ title, image, date, desc }: PostCardProps) {
  const { classes } = useStyles();

  return (
    <Flex direction="column">
      <Image mx="auto" radius="md" src={image} alt="Post image" />
      <Text c="dimmed" className={classes.date}>
        {date}
      </Text>
      <Title order={3} className={classes.title}>
        {title}
      </Title>
      <Text c="dimmed" className={classes.desc}>
        {desc}
      </Text>
    </Flex>
  );
}
