import { Text, Modal, Group, Button, Tabs, Stack, ScrollAreaAutosize, ScrollArea, Title, List, Anchor } from "@mantine/core";
import ExternalLinkButton from "./ExternalLinkButton";
import { useState } from "react";
import { IconFileDescription, IconPhoto } from "@tabler/icons-react";
import type { Project } from "../types/project";
import { useMediaQuery } from "@mantine/hooks";
import Markdown from 'react-markdown'

interface ProjectModalProps {
  project: Project | null;
  projectModalOpen: boolean;
  setProjectModalOpen: (open: boolean) => void;
}

export default function ProjectModal({project, projectModalOpen, setProjectModalOpen}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<string | null>("description");
  const isMobile = useMediaQuery('(max-width: 50em)');

  if (project===null) {
    return (<></>)
  }

  return (
    <Modal 
      title={project.title} 
      opened={projectModalOpen} 
      onClose={() => setProjectModalOpen(false)}
      fullScreen={isMobile}
      size="lg"
      centered
    >
      <Stack gap="sm">
        <Text fs="italic">{project.description}</Text>

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
            <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>Gallery</Tabs.Tab>
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
          <Tabs.Panel value="gallery">Second panel</Tabs.Panel>
        </Tabs>
      </Stack>
    </Modal>
  )
}