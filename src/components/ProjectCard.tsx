import { Badge, Button, Card, CardSection, Divider, Group, Image, Stack, Text } from "@mantine/core";
import ExternalLinkButton from "./ExternalLinkButton";
import type { Project } from "../types/project";
import TechStack from "./TechStack";
import { Link } from "react-router-dom";

export default function ProjectCard({project}: {project: Project}) {

  return (
    <Card withBorder radius="md" padding="md" h="100%">
      <CardSection>
        <Image src={project.image_url} className="w-full aspect-video object-cover"/>
      </CardSection>

      <Stack gap="xs" h="100%">
        <Group mt="sm" gap="xs">
          <Group justify="space-between" w="100%" gap="xs">
            <Text fz="lg" fw={500}>{project.title}</Text>
            {project.type && <Badge>{project.type}</Badge>}
          </Group>
          <Text fz="md">{project.description}</Text>
        </Group>

        <Divider/>

        <Group gap="xs">
          <Text fz="md" c="dimmed" w="100%">Tech Stack</Text>
          <TechStack techStack={project.tech}/>
        </Group>

        <div className="flex-1" />

        <Divider/>

        <Group grow>
          {project.github_url && (
            <ExternalLinkButton text={"Github"} link_url={project.github_url}/>
          )}
          <Link to={`/projects/${project.slug}`}>View Details</Link>
        </Group>
      </Stack>
    </Card>
  );
}