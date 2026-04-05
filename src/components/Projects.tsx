import { useEffect, useState } from 'react';
import { getProjects } from '../lib/getProjects';
import ProjectCard from './ProjectCard';
import { ActionIcon, Container, Grid, GridCol, TextInput } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  useEffect(() => {
    setFilteredProjects(
      projects.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
        p.tech.some((tech: { name: string }) =>
          tech.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
        )
      )
    )
  }, [projects, searchTerm])

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
          <ProjectCard project={p}></ProjectCard>
        </GridCol>
      ))}
    </Grid>
    </>
  );
}