import { Container, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const links = [
  { link: '/', label: 'Home' },
  { link: '#projects', label: 'Projects' },
];

export default function Header() {

  const items = links.map((link) => (
    <Text key={link.label} component="a" href={link.link} size="lg">
      {link.label}
    </Text>
  ));

  return (
    <header className="h-14 border-b border-b-gray-300 dark:border-b-dark-400">
      <Container h="100%">
        <Group h="100%" align="center" justify="space-between">
          <Text size="lg">Header</Text>
          <Group gap="md" visibleFrom="xs">
            {items}
          </Group>
        </Group>
      </Container>
    </header>
  )
}