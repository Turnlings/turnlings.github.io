import '@mantine/core/styles.css';

import { useState } from 'react';
import { MantineProvider, Container, Stack } from '@mantine/core';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import type { Project } from './types/project';

export default function App() {
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  const [project, setProject] = useState<Project | null>(null)

  return <MantineProvider defaultColorScheme="dark">
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-1">
        <Container mt="lg">
          <Stack gap="xl">
            <Introduction/>
            <Projects selected={project} setProject={setProject} setProjectModalOpen={setProjectModalOpen}/>
          </Stack>
          <ProjectModal project={project} projectModalOpen={projectModalOpen} setProjectModalOpen={setProjectModalOpen}/>
        </Container>
      </div>
      <Footer/>
    </div>
  </MantineProvider>;
}