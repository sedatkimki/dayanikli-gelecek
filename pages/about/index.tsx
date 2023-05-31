import { Title, Container, Flex, rem, Text, createStyles, Anchor } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    fontWeight: 700,
  },
  desc: {
    fontWeight: 400,
  },
  link: {
    textDecoration: 'none',
  },
}));
export default function AboutPage() {
  const { classes } = useStyles();

  return (
    <Container size={900} mt={rem(24)}>
      <Flex direction="column" gap="md">
        <Title order={2} className={classes.title}>
          Hakkımızda
        </Title>
        <Text className={classes.desc} color="dimmed">
          Dayanıklı Gelecek, Türkiyedeki insanları depreme karşı bilinçlendirmeyi amaçlayan açık
          kaynak kodlu bir sosyal sorumluluk projesidir. Projemizde yer alan bilgiler,
          gönüllülerimiz tarafından araştırılmış ve yazılmıştır. Projemizde yer alan tüm yazılar ve
          kodlar açık kaynak kodlu olup, herkes tarafından kullanılabilir.
        </Text>
        <Text className={classes.desc} color="dimmed">
          Sizde projeyi desteklemek isterseniz, projemizin
          <Link href="https://github.com/sedatkimki/dayanikli-gelecek" passHref legacyBehavior>
            <Anchor target="_blank" rel="noopener noreferrer" inline>
              {' '}
              GitHub{' '}
            </Anchor>
          </Link>
          sayfasını ziyaret edebilir ve nasıl destek olabileceğinizi öğrenebilirsiniz.
        </Text>
      </Flex>
    </Container>
  );
}
