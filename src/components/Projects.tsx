import { useEffect, useState } from 'react';
import { getProjects } from '../lib/getProjects';
import ProjectCard from './ProjectCard';
import { ActionIcon, Grid, GridCol, TextInput } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import type { Project } from '../types/project';

interface ProjectsProps {
  selected: Project;
  setProject: (project: Project) => void;
  setProjectModalOpen: (open: boolean) => void;
}

export default function Projects({selected, setProject, setProjectModalOpen}: ProjectsProps) {
  const [projects, setProjects] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
    p.tech.some((tech: { name: string }) =>
      tech.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    )
  );

  return (
    <>
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search projects"
      rightSectionWidth={42}
      leftSection={<IconSearch size={18} stroke={1.5} />}
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          variant="filled"
          aria-label="Search"
        >
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
      aria-label="Search projects"
      onChange={(event) => setSearchTerm(event.currentTarget.value)}
    />
    <Grid>
      {filteredProjects.map((p) => (
        <GridCol key={p.slug} span={4}>
          <ProjectCard project={p} setProject={setProject} setProjectModalOpen={setProjectModalOpen}></ProjectCard>
        </GridCol>
      ))}
    </Grid>
    </>
  );
}