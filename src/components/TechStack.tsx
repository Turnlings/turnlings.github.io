import { Badge, Group } from "@mantine/core";
import type { Tech } from "../types/project";

export default function TechStack({techStack}: { techStack: Tech[]}) {
  const techStackBadges = techStack.map((tech) => (
    <Badge variant="outline" key={tech.name} leftSection={<i className={tech.icon} />}>
      {tech.name}
    </Badge>
  ));

  return (
    <Group gap="xs">{techStackBadges}</Group>
  )
}