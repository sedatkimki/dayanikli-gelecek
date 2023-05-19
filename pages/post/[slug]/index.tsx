import { Grid, Container, rem } from '@mantine/core';
import { allPosts, Post } from 'contentlayer/generated';
import { Mdx } from 'components/mdx';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';

import PostHeader from 'components/post-header';
import PostInfo from 'components/post-info';

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths = allPosts.map((post) => `/post/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
}

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
  return (
    <>
      <PostHeader post={post} />
      <Container size={900} mt={rem(24)}>
        <Grid gutter={rem(5)} gutterLg={rem(20)} gutterMd={rem(20)} gutterSm={rem(20)}>
          <Grid.Col order={2} orderLg={1} orderMd={1} orderSm={1} span={12} md={9} lg={9} sm={9}>
            <Mdx code={post.body.code} />
          </Grid.Col>
          <Grid.Col order={1} orderLg={2} orderMd={2} orderSm={2} span={0} md={3} lg={3} sm={3}>
            <PostInfo post={post} />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
