import { Navbar, Welcome, Dock } from '#components/index'
import gsap from 'gsap';
import React from 'react'
import Draggable from 'gsap/Draggable';
import { Finder, Resume, Safari, Terminal, Text,Image  } from '#windows/index.js';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
   <main>
    <Navbar />
    <Welcome />
    <Dock />

    <Terminal />

    <Safari />
    <Resume/>
    <Finder />
    <Text/>
    <Image/>
    
   </main>
  )
}

export default App
