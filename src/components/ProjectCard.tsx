import { Badge, Button, Card, CardSection, Group, Image, Stack, Text } from "@mantine/core";

export default function ProjectCard({project}) {
  const techStack = project.tech.map((tech) => (
    <Badge variant="outline" key={tech.name} leftSection={<i className={tech.icon} />}>
      {tech.name}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" padding="md">
      <CardSection>
        <Image src={project.image_url}></Image>
      </CardSection>

      <Stack>
        <Group mt="sm" gap="xs">
          <Group justify="space-between" w="100%">
            <Text fz="lg" fw={500}>{project.title}</Text>
            {project.game && <Badge>Game</Badge>}
          </Group>
          <Text fz="md">{project.description}</Text>
        </Group>

        <Group gap="xs">
          <Text fz="md" c="dimmed" className="">{"Tech Stack"}</Text>
          <Group gap="xs">
            {techStack}
          </Group>
        </Group>

        <Group grow>
          <Button variant="default">Github</Button>
          <Button>View</Button>
        </Group>
      </Stack>
    </Card>
  )
}