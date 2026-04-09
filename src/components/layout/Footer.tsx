import { ActionIcon, Container, Group, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const socials = [
  {
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/ryan-michael-turner/", 
    icon: <IconBrandLinkedin/>
  },
  {
    name: "Github",
    href: "https://github.com/Turnlings",
    icon: <IconBrandGithub/>
  },
]

export default function Footer() {
  return (
    <footer className="h-20 border-t border-t-gray-300 dark:border-t-dark-400 mt-4">
      <Container h="100%">
        <Group justify="space-between" h="100%">
          <Text>&copy; Ryan Turner 2026</Text>
          <Group>
            {socials.map((s) =>
              <ActionIcon
                key={s.name}
                variant="transparent"
                aria-label={s.name}
                component="a"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </ActionIcon>
            )}
          </Group>
        </Group>
      </Container>
    </footer>
  )
}