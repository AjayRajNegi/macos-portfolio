import { Dock, Navbar, Welcome } from "#components";
import { Terminal, Safari, Resume, Finder } from "#windows";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React from "react";

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
    </main>
  );
};

export default App;
