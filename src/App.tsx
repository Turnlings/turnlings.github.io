import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Header from './components/layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/Project';

export default function App() {
  return <MantineProvider defaultColorScheme="dark">
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects/:slug" element={<ProjectPage/>} />
      </Routes>
    </BrowserRouter>
  </MantineProvider>;
}