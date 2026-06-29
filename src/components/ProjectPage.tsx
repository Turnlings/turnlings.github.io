import { Text, Modal, Group, Button, Tabs, Stack, ScrollAreaAutosize, ScrollArea, Title, List, Anchor, Center, Image } from "@mantine/core";
import ExternalLinkButton from "./ExternalLinkButton";
import { useEffect, useState } from "react";
import { IconFileDescription, IconPhoto, IconPlayerPlay } from "@tabler/icons-react";
import type { Project } from "../types/project";
import { useMediaQuery } from "@mantine/hooks";
import Markdown from 'react-markdown'
import TechStack from "./TechStack";
import Playable from "./Playable";
import { useParams } from "react-router-dom";
import { getProjects } from "../lib/getProjects";

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>("description");

  useEffect(() => {
    getProjects().then((projects) => {
      const found = projects.find((p: Project) => p.slug === slug);
      setProject(found ?? null);
    });
  }, [slug]);

  if (!project) return <div>Project not found</div>;

  return (
    <Stack gap="sm">
      <Stack gap={0}>
        <Title order={1}>{project.title}</Title>
        <Text size="lg" c="dimmed" fs="italic">{project.description}</Text>
      </Stack>

      <TechStack techStack={project.tech}/>

      <Group grow>
        {project.github_url && (
          <ExternalLinkButton text={"Github"} link_url={project.github_url}/>
        )}
        {project.link_url && (
          <ExternalLinkButton text={"Visit Website"} link_url={project.link_url}/>
        )}
      </Group>

      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="description" leftSection={<IconFileDescription size={12} />}>Description</Tabs.Tab>
          {project.images && (
            <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>Gallery</Tabs.Tab>
          )}
          {project.play && (
            <Tabs.Tab value="play" leftSection={<IconPlayerPlay size={12} />}>Play</Tabs.Tab>
          )}
        </Tabs.List>

        <Tabs.Panel value="description" mt="sm">
          <ScrollArea scrollbars="y">
            <Markdown
              components={{
                h1: ({children}) => <Title order={1} mt="md" mb="sm">{children}</Title>,
                h2: ({children}) => <Title order={2} mt="md" mb="sm">{children}</Title>,
                h3: ({children}) => <Title order={3} mt="md" mb="sm">{children}</Title>,
                p: ({children}) => <Text component="p" mb="md">{children}</Text>,
                ul: ({children}) => <List>{children}</List>,
                li: ({children}) => <List.Item>{children}</List.Item>,
                a: ({href, children}) => (
                  <Anchor href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </Anchor>
                ),
              }}
            >
              {project.content}
            </Markdown>
          </ScrollArea>
        </Tabs.Panel>

        <Tabs.Panel value="gallery">
          {project.images?.map((i) =>
            <div key={i.alt}>
              <Image mt="sm" radius="md" src={i.path} alt={i.alt}/>
              <Text fs="italic">{i.desc}</Text>
            </div>
          )}
        </Tabs.Panel>

        {project.play && (
          <Tabs.Panel value="play">
            <Playable game={project.play}/>
          </Tabs.Panel>
        )}
      </Tabs>
    </Stack>
  )
}