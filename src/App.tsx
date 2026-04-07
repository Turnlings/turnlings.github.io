import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Header from './components/layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/Project';
import Footer from './components/layout/Footer';

export default function App() {
  return <MantineProvider defaultColorScheme="dark">
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects/:slug" element={<ProjectPage/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  </MantineProvider>;
}