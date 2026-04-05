import { Container, Stack, Grid, GridCol } from "@mantine/core";
import Career from "../components/Career";
import Projects from "../components/Projects";
import Introduction from "../components/Introduction";

export default function Home() {
  return (
    <Container>
      <Stack gap="xl">
        <Grid align="start">
          <GridCol span={{ base: 12, md: 'auto' }}>
            <Introduction/>
          </GridCol>
          <GridCol span={{ base: 12, md: 'content' }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Career/>
          </GridCol>
        </Grid>
        <Projects/>
      </Stack>
    </Container>
  )
}