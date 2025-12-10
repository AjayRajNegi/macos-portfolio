import { Dock, Navbar, Welcome } from "#components";
import { Terminal, Safari, Resume } from "#windows";

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
    </main>
  );
};

export default App;
