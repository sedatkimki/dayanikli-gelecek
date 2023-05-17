import { Container, Title, rem, Text, Flex, createStyles, Grid } from '@mantine/core';
import Link from 'next/link';
import PostCard from '../../components/post-card';

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

export default function PostsPage() {
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
        <Grid.Col span={12} md={6} lg={6} sm={6}>
          <Link href="/post/1" className={classes.link} passHref>
            <PostCard
              title="Afet ve Acil Durum çantası nasıl hazırlanmalı ?"
              image="https://images.unsplash.com/photo-1684077140580-cd2cb0987ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"
              date="March 25, 2023"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque purus, varius"
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={12} md={6} lg={6} sm={6}>
          <Link href="/post/1" className={classes.link} passHref>
            <PostCard
              title="Afet ve Acil Durum çantası nasıl hazırlanmalı ?"
              image="https://images.unsplash.com/photo-1684077140580-cd2cb0987ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"
              date="March 25, 2023"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque purus, varius"
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={12} md={6} lg={6} sm={6}>
          <Link href="/post/1" className={classes.link} passHref>
            <PostCard
              title="Afet ve Acil Durum çantası nasıl hazırlanmalı ?"
              image="https://images.unsplash.com/photo-1684077140580-cd2cb0987ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"
              date="March 25, 2023"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque purus, varius"
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={12} md={6} lg={6} sm={6}>
          <Link href="/post/1" className={classes.link} passHref>
            <PostCard
              title="Afet ve Acil Durum çantası nasıl hazırlanmalı ?"
              image="https://images.unsplash.com/photo-1684077140580-cd2cb0987ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"
              date="March 25, 2023"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque purus, varius"
            />
          </Link>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
