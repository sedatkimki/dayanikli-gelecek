import { Paper, Text, createStyles, Container, rem, Flex } from '@mantine/core';
import ContactIconsList from 'components/contact-icons';

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: rem(4),
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg,
      color: theme.colorScheme === 'dark' ? theme.colors.gray[9] : theme.white,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: `${rem(1)} solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(280)}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[9],

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },
  };
});

export default function ContactPage() {
  const { classes } = useStyles();

  return (
    <Container size={900} mt={rem(24)}>
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title}>
              İletişim Bilgileri
            </Text>
            <ContactIconsList />
          </div>
          <Flex direction="column" className={classes.form}>
            <Text fz="lg" fw={700} className={classes.title}>
              Bize Ulaşın
            </Text>
            <Text color="dimmed">
              Bize ulaşmak için verilen iletişim bilgilerini kullanabilirisiniz.
            </Text>
          </Flex>
        </div>
      </Paper>
    </Container>
  );
}
