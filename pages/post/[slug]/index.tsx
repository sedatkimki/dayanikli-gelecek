import {
  Title,
  Group,
  Grid,
  Container,
  rem,
  Text,
  Image,
  Box,
  createStyles,
  Stack,
  Divider,
} from '@mantine/core';
import { allPosts, Post } from 'contentlayer/generated';
import { Mdx } from 'components/mdx';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = allPosts.map((post) => `/post/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
}

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
export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<{ post: Post }>> {
  const post = allPosts.find((a) => a.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }: { post: Post }) {
  const { classes } = useStyles();

  return (
    <>
      <Container size={900} mt={rem(24)}>
        <Group>
          <Text color="dimmed" size="sm">
            {format(parseISO(post.date!), 'd LLLL yyyy', {
              locale: tr,
            })}
          </Text>
        </Group>
        <Stack spacing="xs" mt={rem(8)} mb={rem(24)}>
          <Title className={classes.title}>Blog {post.title}</Title>
          <Text color="dimmed">{post.subtitle}</Text>
        </Stack>
      </Container>
      <Container size={900} mt={rem(24)} mb={0}>
        <Box className={classes.image}>
          <Image mx="auto" src={post.image} alt="Post image" withPlaceholder />
        </Box>
      </Container>
      <Divider variant="solid" />
      <Container size={900} mt={rem(24)}>
        <Grid>
          <Grid.Col span={9}>
            <Mdx code={post.body.code} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Text color="dimmed" size="sm">
              {post.readingTime.text}
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
