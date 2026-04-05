import { Badge, Button, Card, CardSection, Group, Text } from "@mantine/core";

export default function ProjectCard({project}) {
  const techStack = project.tech.map((tech) => (
    <Badge variant="outline" key={tech.name} leftSection={<i className={tech.icon} />}>
      {tech.name}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" padding="md">
      <CardSection>
        Image
      </CardSection>

      <Group>
        <Group mt="sm" gap="xs">
          <Text fz="lg">{project.title}</Text>
          <Text fz="sm">{project.description}</Text>
        </Group>

        <Group gap="xs">
          <Text fz="sm" c="dimmed" className="">{"Tech Stack"}</Text>
          <Group gap="xs">
            {techStack}
          </Group>
        </Group>

        <Group>
          <Button variant="default">Github</Button>
          <Button>View</Button>
        </Group>
      </Group>
    </Card>
  )
}