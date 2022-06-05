import { Anchor, Container, Group, Title } from '@mantine/core';
import StatDisplay from '../../components/StatDisplay/StatDisplay';
import { RowBetween } from '../../components/ThemedComponents';
import useStyles from './Lend.styles';

const dummyData = [
  { title: 'Loans Funded', content: '1,401,592', label: 'cUSD' },
  { title: 'Total Value Locked', content: '13,401,592', label: 'cUSD' },
  { title: 'Liquid Assets', content: '2,193,913', label: 'cUSD' },
  { title: 'Average Assets', content: '12.9%', label: 'APY' },
];

export default function ProtocolStats() {
  const { classes } = useStyles();

  return (
    <Container fluid className={classes.container}>
      <Container size="lg">
        <Group position="apart" mb={40} className={classes.textGroup} align="baseline">
          <Title>Protocol Stats</Title>
          <Anchor
            className={classes.textGroup}
            underline
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
          >
            Learn How it Works
          </Anchor>
        </Group>
        <StatDisplay stats={dummyData} />
      </Container>
    </Container>
  );
}
