import { Badge, Button, Card, CardSection, Group, Image, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

interface Project {
  slug: string;
  title: string;
  description: string;
  image_url: string;
  github_url?: string;
  link_url?: string;
  tech: { icon: string; name: string; priority?: boolean }[];
  game?: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  const techStack = project.tech.map((tech) => (
    <Badge variant="outline" key={tech.name} leftSection={<i className={tech.icon} />}>
      {tech.name}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" padding="md">
      <CardSection>
        <Image src={project.image_url} height={180} fit="cover" />
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
          <Text fz="md" c="dimmed">Tech Stack</Text>
          <Group gap="xs">{techStack}</Group>
        </Group>

        <Group grow>
          {project.github_url && (
            <Button
              component="a"
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
            >
              Github
            </Button>
          )}
          <Button
            component={Link}
            to={`/projects/${project.slug}`}
            variant="filled"
          >
            View
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}