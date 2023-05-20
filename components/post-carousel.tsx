import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Card,
  Image,
  Group,
  Badge,
  Stack,
} from '@mantine/core';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(375),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

function PostCard({ image, title, subtitle, readingTime, date, slug }: Post) {
  const { classes } = useStyles();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
      <Card.Section>
        <Image src={image} height={160} alt="image" />
      </Card.Section>
      <div>
        <Group position="apart" mt="sm">
          <Text size="xs" color="dimmed">
            {format(parseISO(date!), 'd LLLL yyyy', {
              locale: tr,
            })}
            {' • '} {readingTime.text}
          </Text>
        </Group>
        <Group position="apart" mt="xs" mb="xs">
          <Text size="lg" weight={600}>
            {title}
          </Text>
        </Group>

        <Text size="sm" color="dimmed" sx={{ marginBottom: 'auto' }}>
          {subtitle}
        </Text>
      </div>

      <Link href={`/post/${slug}`} passHref legacyBehavior>
        <Button
          variant="filled"
          sx={{
            textDecoration: 'none',
          }}
          size="sm"
          color="dark"
          fullWidth
          mt="auto"
          radius="md"
        >
          Devamını Oku
        </Button>
      </Link>
    </Card>
  );
}

export default function PostCarousel({ posts }: { posts: Post[] }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = posts?.map((item) => (
    <Carousel.Slide key={item._id}>
      <PostCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="33.3333%"
      breakpoints={[
        { maxWidth: 'sm', slideSize: '50%', slideGap: 'lg' },
        { maxWidth: 'xs', slideSize: '100%', slideGap: 2 },
      ]}
      slideGap="lg"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      px={mobile ? 0 : 'xs'}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
    >
      {slides}
    </Carousel>
  );
}
