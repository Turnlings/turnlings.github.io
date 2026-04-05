import { useEffect, useState } from 'react';
import { getProjects } from '../lib/getProjects';
import ProjectCard from './ProjectCard';
import { Container, Grid, GridCol } from '@mantine/core';

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <Container>
      <Grid>
        {projects.map((p) => (
          <GridCol key={p.slug} span={4}>
            <ProjectCard project={p}></ProjectCard>
          </GridCol>
        ))}
      </Grid>
    </Container>
  );
}