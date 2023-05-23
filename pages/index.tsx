import { Title, Container, rem, Center, Text, Box, createStyles, Flex } from '@mantine/core';
import PostCarousel from 'components/post-carousel';
import { GetStaticPropsResult } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

const useStyles = createStyles((theme) => ({
  hero: {
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0.74) 0%, rgba(0, 0, 0, 0) 100%), url(/images/deprem.jpg)',
    mixBlendMode: 'luminosity',
    borderRadius: '24px',
    height: '506.25px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: theme.shadows.xl,
  },
}));

export async function getStaticProps(): Promise<GetStaticPropsResult<{ posts: Post[] }>> {
  const posts: Post[] = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return { props: { posts: posts.map((post: Post) => post) } };
}

export default function HomePage({ posts }: { posts: Post[] }) {
  const { classes } = useStyles();

  return (
    <Container size={900} mt={rem(24)}>
      <Box className={classes.hero}>
        <Center pt={rem(60)} px={rem(40)} p="md" mx="auto">
          <Title color="#fff" align="center">
            Deprem doğal afet, bilinçsizlik felakettir.
          </Title>
        </Center>
        <Center px={rem(40)} p="md" mx="auto">
          <Text color="#fff" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequatur voluptas
            nemo modi numquam incidunt a iusto dignissimos quia inventore.
          </Text>
        </Center>
      </Box>
      <Box py={50}>
        <PostCarousel posts={posts} />
      </Box>
    </Container>
  );
}
