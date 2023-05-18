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
  Avatar,
  ThemeIcon,
  MediaQuery,
  Center,
} from '@mantine/core';
import { allPosts, Post } from 'contentlayer/generated';
import { Mdx } from 'components/mdx';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';
import Link from 'next/link';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';
import { IconBrandFacebook, IconBrandTwitter, IconBrandWhatsapp } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

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
  sticky: {
    position: 'sticky',
    top: rem(24),
  },
  link: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    ':hover': {
      textDecoration: 'underline',
    },
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
  const largeScreen = useMediaQuery('(min-width: 44em)');

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
      <Container size={900} mt={rem(24)}>
        <Grid gutter={rem(5)} gutterLg={rem(20)} gutterMd={rem(20)} gutterSm={rem(20)}>
          <Grid.Col order={2} orderLg={1} orderMd={1} orderSm={1} span={12} md={9} lg={9} sm={9}>
            <Mdx code={post.body.code} />
          </Grid.Col>
          <Grid.Col order={1} orderLg={2} orderMd={2} orderSm={2} span={0} md={3} lg={3} sm={3}>
            <Box className={largeScreen ? classes.sticky : ''}>
              <Grid gutter={rem(32)}>
                <Grid.Col span={6} md={12} lg={12} sm={12}>
                  <Title order={4}>Yazar</Title>
                  <Group spacing="sm" mt={rem(16)}>
                    <Avatar
                      radius="xl"
                      src={post.profileImage}
                      size={largeScreen ? rem(40) : rem(32)}
                      alt={post.author}
                    >
                      {post.author
                        .match(/(\b\S)?/g)
                        ?.join('')
                        .toUpperCase()}
                    </Avatar>
                    <Stack spacing="none">
                      <Link
                        target="_blank"
                        href={post.profileLink}
                        passHref
                        className={classes.link}
                      >
                        <Text size="sm">{post.author}</Text>
                        <Text size="xs" color="dimmed">
                          {post.profileName}
                        </Text>
                      </Link>
                    </Stack>
                  </Group>
                </Grid.Col>
                <Grid.Col span={6} md={12} lg={12} sm={12}>
                  <Title order={4}>Paylaş</Title>
                  <Group spacing="xl" mt={rem(16)}>
                    <TwitterShareButton
                      url={`https://dayanikli-gelecek.vercel.app/post/${post.slug}`}
                      title={post.title}
                      via={post.author}
                      hashtags={['dayanikligelecek']}
                      className={classes.link}
                    >
                      <ThemeIcon
                        variant="light"
                        radius="xl"
                        size={largeScreen ? 'lg' : 'md'}
                        color="gray"
                      >
                        <IconBrandTwitter />
                      </ThemeIcon>
                    </TwitterShareButton>
                    <FacebookShareButton
                      url={`https://dayanikli-gelecek.vercel.app/post/${post.slug}`}
                      quote={post.title}
                      hashtag="#dayanikligelecek"
                      className={classes.link}
                    >
                      <ThemeIcon
                        variant="light"
                        radius="xl"
                        size={largeScreen ? 'lg' : 'md'}
                        color="gray"
                      >
                        <IconBrandFacebook />
                      </ThemeIcon>
                    </FacebookShareButton>
                    <WhatsappShareButton
                      url={`https://dayanikli-gelecek.vercel.app/post/${post.slug}`}
                      title={post.title}
                      separator=": "
                      className={classes.link}
                    >
                      <ThemeIcon
                        variant="light"
                        radius="xl"
                        size={largeScreen ? 'lg' : 'md'}
                        color="gray"
                      >
                        <IconBrandWhatsapp />
                      </ThemeIcon>
                    </WhatsappShareButton>
                  </Group>
                </Grid.Col>
              </Grid>
            </Box>
            <MediaQuery
              largerThan="sm"
              styles={{
                display: 'none',
              }}
            >
              <Divider
                mt="xl"
                mb="lg"
                sx={{
                  position: 'relative',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100vw',
                }}
              />
            </MediaQuery>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
