import { Button, Group, Text, Title } from "@mantine/core";
import { IconBrandGithub, IconMail } from "@tabler/icons-react";

export default function Introduction() {
  return (
    <div className="flex flex-col h-full">
      <Title order={1}>Ryan Turner</Title>
      <Text size="lg" c="dimmed" fs="italic">Student Software Engineer</Text>
      <Text size="lg" mt="sm">Computer Science student with hands-on experience in full-stack development, team projects, and working with real clients. Curious about new technologies and focused on building dependable, maintainable, and genuinely useful software.</Text>
      <div className="flex-1" />
      <Group mt="sm">  
        <Button
          component="a"
          href="https://github.com/Turnlings"
          target="_blank"
          rel="noopener noreferrer"
          variant="default"
          leftSection={<IconBrandGithub />}
        >
          Github
        </Button>
        <Button
          component="a"
          href="mailto:ryan.turner.dev@gmail.com"
          variant="default"
          leftSection={<IconMail />}
        >
          Email
        </Button>
      </Group>
    </div>
  )
}