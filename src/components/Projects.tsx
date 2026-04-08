import { useEffect, useState } from 'react';
import { getProjects } from '../lib/getProjects';
import ProjectCard from './ProjectCard';
import { ActionIcon, Grid, GridCol, Text, TextInput } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import type { Project } from '../types/project';

interface ProjectsProps {
  selected: Project | null;
  setProject: (project: Project | null) => void;
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
  ).sort((a: Project, b: Project) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <>
    <TextInput
      id="projects"
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
    <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 items-stretch">
      {filteredProjects.map((p) => (
        <div key={p.slug} className="h-full">
          <ProjectCard project={p} setProject={setProject} setProjectModalOpen={setProjectModalOpen} />
        </div>
      ))}
    </div>
    {filteredProjects.length === 0 && (
      <Text c="dimmed" ta="center" my="lg">No projects match your search</Text>
    )}
    </>
  );
}