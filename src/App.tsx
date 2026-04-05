import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Projects from './components/Projects';
import Header from './components/layout/Header';

export default function App() {
  return <MantineProvider defaultColorScheme="dark">
    <Header></Header>
    <Projects></Projects>
  </MantineProvider>;
}