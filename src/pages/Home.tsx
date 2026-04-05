import { Container, Stack } from "@mantine/core";
import Career from "../components/Career";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <Container>
      <Stack gap="xl">
        <Career/>
        <Projects/>
      </Stack>
    </Container>
  )
}