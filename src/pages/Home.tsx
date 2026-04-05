import { Container, Stack, Grid, GridCol } from "@mantine/core";
import Career from "../components/Career";
import Projects from "../components/Projects";
import Introduction from "../components/Introduction";

export default function Home() {
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
        <Projects/>
      </Stack>
    </Container>
  )
}