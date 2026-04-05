import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjects } from '../lib/getProjects';
import type { Project } from '../lib/getProjects';
import { Container, Loader, Text, Typography } from '@mantine/core';

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProjects().then((projects) => {
      const found = projects.find((p) => p.slug === slug);
      if (found) {
        setProject(found);
      } else {
        setError('Project not found');
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <Loader />;
  if (error) return <Text c="red">{error}</Text>;
  if (!project) return null;

  return (
    <Container size="md" py="xl">
      <Text fz="xl" fw={700}>{project.title}</Text>
      <Text fz="md" mt="sm">{project.description}</Text>
      <Typography>
        <div
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </Typography>
    </Container>
  );
}
