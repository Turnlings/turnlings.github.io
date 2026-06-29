import '@mantine/core/styles.css';

import { MantineProvider, Container, Stack } from '@mantine/core';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';

export default function App() {
  return <MantineProvider defaultColorScheme="dark">
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-1">
        <Container mt="lg">
          <HashRouter>
            <Routes>
              <Route path="/" element={
                <Stack gap="xl">
                  <Introduction/>
                  <Projects/>
                </Stack>
              }/>
              <Route path="projects/:slug" element={<ProjectPage />}></Route>
            </Routes>
          </HashRouter>
        </Container>
      </div>
      <Footer/>
    </div>
  </MantineProvider>;
}