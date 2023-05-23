import {
  Title,
  Container,
  rem,
  Center,
  Text,
  Box,
  createStyles,
  Flex,
  Stack,
  Button,
} from '@mantine/core';
import PostCarousel from 'components/post-carousel';
import { GetStaticPropsResult } from 'next';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Stats from 'components/stats';

const useStyles = createStyles((theme) => ({
  hero: {
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.30) 100%), url(/images/deprem.jpg)',
    mixBlendMode: 'luminosity',
    borderRadius: '24px',
    height: '506.25px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: theme.shadows.xl,
  },
  textColor: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
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
            Deprem, kaçınılmaz bir gerçeklik ve ülkemizde hayatlarımızı derinden etkileyen bir
            tehlikedir. Bilinçlenmek, hayatları kurtarabilir, zararları azaltabilir ve toplumsal
            dayanışmayı güçlendirebilir. Deprem gerçeğiyle yüzleşin, bilgi ve hazırlıkla felaketi
            önleyin!
          </Text>
        </Center>
      </Box>
      <Box py={50}>
        <Stats
          data={[
            {
              title: 'Deprem',
              description: 'Son 10 yılda türkiyede meydana gelen 5.0 ve üzeri yıkıcı deprem sayısı',
              stats: 39,
            },
            {
              title: 'En büyük deprem',
              description: 'Türkiyede meydana gelen en büyük deprem',
              stats: 7.8,
            },
            {
              title: 'Kişi hayatını kaybetti',
              description: 'Son 10 yılda türkiyede meydana gelen 5.0 ve üzeri yıkıcı depremlerde',
              stats: 51911,
            },
          ]}
        />
      </Box>
      <Box py={50}>
        <PostCarousel posts={posts} />
      </Box>
      <Box py={50}>
        <Stack spacing="xl">
          <Title align="center" order={2} className={classes.textColor}>
            Katkıda bulunmak ister misiniz?
          </Title>
          <Text align="center" className={classes.textColor}>
            Dayanıklı Gelecek gönüllü bir projedir. Eğer sizde bu projeye depreme karşı
            bilinçlendirme amacıyla yazdığınız yazıyı bizimle paylaşabilirsiniz. Aşağıdaki butona
            tıklayarak projenin github sayfasına gidebilir ve yazdığınız yazıyı projeye ekleyerek
            gönüllülerimiz arasına girebilirsiniz.
          </Text>
          <Center>
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/sedatkimki/dayanikli-gelecek"
              size="md"
              color="dark"
              radius="md"
            >
              Projeye katkıda bulun
            </Button>
          </Center>
        </Stack>
      </Box>
    </Container>
  );
}
