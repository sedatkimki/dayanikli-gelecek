import { Title, Container, rem, Center, Text, Box, createStyles } from '@mantine/core';

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

export default function HomePage() {
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
    </Container>
  );
}
