import { Navbar, Welcome, Dock, Home } from '#components/index'
import gsap from 'gsap';
import React from 'react'
import Draggable from 'gsap/Draggable';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Gallery } from '#windows/index.js';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />

      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Gallery />
      <Home />

    </main>
  )
}

export default App
