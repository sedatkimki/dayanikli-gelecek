import { Container, Title, rem, Text, Flex, createStyles, Grid } from '@mantine/core';
import Link from 'next/link';
import { tr } from 'date-fns/locale';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticPropsResult } from 'next';
import PostCard from '../../components/post-card';

export async function getStaticProps(): Promise<GetStaticPropsResult<{ posts: Post[] }>> {
  const posts: Post[] = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return { props: { posts: posts.map((post: Post) => post) } };
}

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    fontWeight: 700,
  },
  desc: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    fontWeight: 400,
  },
  link: {
    textDecoration: 'none',
  },
}));

export default function PostsPage({ posts }: { posts: Post[] }) {
  const { classes } = useStyles();

  return (
    <Container size={900} mt={rem(24)}>
      <Flex direction="column" gap="md">
        <Title order={2} className={classes.title}>
          Yazılar
        </Title>
        <Text className={classes.desc}>
          Bu sayfada Deprem hakkında yazılan yazıları bulabilirsiniz{' '}
        </Text>
      </Flex>

      <Grid gutter={rem(35)} mt={rem(20)}>
        {posts.map((post, key) => (
          <Grid.Col key={key} span={12} md={6} lg={6} sm={6}>
            <Link href={`/post/${post.slug}`} className={classes.link} passHref>
              <PostCard
                title={post.title}
                image={post.image}
                date={format(parseISO(post.date!), 'd LLLL yyyy', {
                  locale: tr,
                })}
                desc={post.subtitle}
                readingTime={post.readingTime.text}
              />
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
