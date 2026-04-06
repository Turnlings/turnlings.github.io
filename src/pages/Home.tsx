import { Container, Stack } from "@mantine/core";
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
  )
}