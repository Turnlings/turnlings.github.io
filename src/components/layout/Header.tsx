import { Container, Group } from "@mantine/core";
import { Link } from "react-router-dom";

const links = [
  { link: '/', label: 'Home' },
  { link: '/other', label: 'Other' },
];

export default function Header() {

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
    >
      {link.label}
    </Link>
  ));

  return (
    <header>
      <Container>
        <Group justify="space-between">
          Header
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
        </Group>
      </Container>
    </header>
  )
}