import { Text, Modal, Group, Button, Tabs, Stack, ScrollAreaAutosize, ScrollArea } from "@mantine/core";
import ExternalLinkButton from "./ExternalLinkButton";
import { useState } from "react";
import { IconFileDescription, IconPhoto } from "@tabler/icons-react";
import type { Project } from "../types/project";

interface ProjectModalProps {
  project: Project;
  projectModalOpen: boolean;
  setProjectModalOpen: (open: boolean) => void;
}

export default function ProjectModal({project, projectModalOpen, setProjectModalOpen}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<string | null>("description");

  if (project===null) {
    return (<></>)
  }

  return (
    <Modal 
      title={project.title} 
      opened={projectModalOpen} 
      onClose={() => setProjectModalOpen(false)}

      size="lg"
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

          <Tabs.Panel value="description">
            <ScrollArea scrollbars="y">
              {project.content}
            </ScrollArea>
          </Tabs.Panel>
          <Tabs.Panel value="gallery">Second panel</Tabs.Panel>
        </Tabs>
      </Stack>
    </Modal>
  )
}