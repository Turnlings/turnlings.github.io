import { Container, Stack, Grid, GridCol } from "@mantine/core";
import Career from "../components/Career";
import Projects from "../components/Projects";
import Introduction from "../components/Introduction";
import { useState } from "react";
import ProjectModal from "../components/ProjectModal";

export default function Home() {
  const [projectModalOpen, setProjectModalOpen] = useState(false)
  const [project, setProject] = useState(null)


  return (
    <Container mt="lg">
      <Stack gap="xl">
        <Grid align="stretch">
          <GridCol span={{ base: 12, md: 'auto' }} h="100%">
            <Introduction/>
          </GridCol>
          <GridCol span={{ base: 12, md: 'content' }} h="100%" style={{ display: 'flex', justifyContent: 'center' }}>
            <Career/>
          </GridCol>
        </Grid>
        <Projects selected={project} setProject={setProject} setProjectModalOpen={setProjectModalOpen}/>
      </Stack>
      <ProjectModal project={project} projectModalOpen={projectModalOpen} setProjectModalOpen={setProjectModalOpen}/>
    </Container>
  )
}