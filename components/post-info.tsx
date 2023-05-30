import {
  Title,
  Group,
  Grid,
  rem,
  Text,
  Box,
  createStyles,
  Stack,
  Divider,
  Avatar,
  ThemeIcon,
  MediaQuery,
} from '@mantine/core';
import { Post } from 'contentlayer/generated';
import { useMediaQuery } from '@mantine/hooks';
import { TwitterShareButton, FacebookShareButton, WhatsappShareButton } from 'next-share';
import { IconBrandFacebook, IconBrandTwitter, IconBrandWhatsapp } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
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

export default function PostInfo({ post }: { post: Post }) {
  const { classes } = useStyles();
  const largeScreen = useMediaQuery('(min-width: 44em)');
  return (
    <>
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
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .toUpperCase()}
              </Avatar>
              <Stack spacing="none">
                <Link target="_blank" href={post.profileLink} passHref className={classes.link}>
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
                via={post.profileName}
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
    </>
  );
}
