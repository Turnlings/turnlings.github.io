import '@mantine/core/styles.css';

import { useState } from 'react';
import { MantineProvider, Container, Stack } from '@mantine/core';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Introduction from './components/Introduction';
import Career from './components/Career';
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
            <div className="grid gap-4 grid-cols-1 md:grid-cols-[auto_max-content] items-stretch w-full">
              <div className="h-full">
                <Introduction/>
              </div>
              <div className="h-full flex justify-center">
                <Career/>
              </div>
            </div>
            <Projects selected={project} setProject={setProject} setProjectModalOpen={setProjectModalOpen}/>
          </Stack>
          <ProjectModal project={project} projectModalOpen={projectModalOpen} setProjectModalOpen={setProjectModalOpen}/>
        </Container>
      </div>
      <Footer/>
    </div>
  </MantineProvider>;
}