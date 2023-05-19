import {
  Title,
  Group,
  Container,
  rem,
  Text,
  Image,
  Box,
  createStyles,
  Stack,
  Divider,
} from '@mantine/core';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Post } from 'contentlayer/generated';

const useStyles = createStyles((theme) => ({
  image: {
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    overflow: 'hidden',
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    fontWeight: 700,
    fontSize: rem(40),
  },
}));

export default function PostHeader({ post }: { post: Post }) {
  const { classes } = useStyles();

  return (
    <>
      <Container size={900} mt={rem(24)}>
        <Group>
          <Text color="dimmed" size="sm">
            {format(parseISO(post.date!), 'd LLLL yyyy', {
              locale: tr,
            })}
            {' • '} {post.readingTime.text}
          </Text>
        </Group>
        <Stack spacing="xs" mt={rem(8)} mb={rem(24)}>
          <Title className={classes.title}>{post.title}</Title>
          <Text color="dimmed">{post.subtitle}</Text>
        </Stack>
      </Container>
      <Container size={900} mt={rem(24)} mb={0}>
        <Box className={classes.image}>
          <Image mx="auto" src={post.image} alt="Post image" withPlaceholder />
        </Box>
      </Container>
      <Divider variant="solid" />
    </>
  );
}
