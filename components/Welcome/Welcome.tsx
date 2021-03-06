import { Title, Text, useMantineTheme } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: theme.colors.purple[9], to: theme.colors.purple[0], deg: 90 }}
        >
          1754 Factory
        </Text>
        <Text size="xl" weight={500}>
          Last Mile Lending for Fintechs and Consumers in the Global South
        </Text>
      </Title>
    </>
  );
}
