import React from 'react';

import Navbar from './components/Navbar'

export default function App() {
  return (
      <main>
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Works />
        <Projects />
      </main>
  );
}