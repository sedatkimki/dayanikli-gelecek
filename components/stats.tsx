import { createStyles, Text, rem } from '@mantine/core';
import { animate, useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect } from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  count: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    fontSize: rem(32),
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
  },

  description: {
    fontSize: theme.fontSizes.sm,
    marginTop: rem(5),
  },

  stat: {
    flex: 1,

    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,

      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
        }`,
      },
    },
  },
}));

function Stat({
  title,
  stats,
  description,
}: {
  title: string;
  stats: number;
  description: string;
}) {
  const { classes } = useStyles();

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    if (latest !== stats) {
      return Math.floor(latest);
    }
    return latest;
  });

  useEffect(() => {
    const controls = animate(count, stats, { duration: 2 });

    return controls.stop;
  }, []);

  return (
    <div className={classes.stat}>
      <Text className={classes.count}>
        <motion.div>{rounded}</motion.div>
      </Text>
      <Text className={classes.title}>{title}</Text>
      <Text color="dimmed" className={classes.description}>
        {description}
      </Text>
    </div>
  );
}
interface StatsGroupProps {
  data: { title: string; stats: number; description: string }[];
}

export default function Stats({ data }: StatsGroupProps) {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <Stat title={stat.title} description={stat.description} stats={stat.stats} />
  ));
  return <div className={classes.root}>{stats}</div>;
}
