import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Text,
  Button,
  useMantineTheme,
  rem,
  Card,
  Image,
  Group,
  Flex,
  Title,
} from '@mantine/core';
import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(400),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  title: {
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
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
          <Text lineClamp={2} size="lg" weight={600}>
            {title}
          </Text>
        </Group>

        <Text lineClamp={3} size="sm" color="dimmed" sx={{ marginBottom: 'auto' }}>
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
  const { classes } = useStyles();
  const slides = posts?.map((item) => (
    <Carousel.Slide key={item._id}>
      <PostCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Flex direction="column" gap="md" mb="lg">
        <Title order={2} className={classes.sectionTitle}>
          Yazılar
        </Title>
        <Text color="dimmed">Bu sayfada Deprem hakkında yazılan yazıları bulabilirsiniz </Text>
      </Flex>
      <Carousel
        slideSize="33.3333%"
        breakpoints={[
          { maxWidth: 'sm', slideSize: '50%', slideGap: 'lg' },
          { maxWidth: 'xs', slideSize: '100%', slideGap: 2 },
        ]}
        slideGap="lg"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        // px={mobile ? 0 : 'xs'}
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
    </>
  );
}
