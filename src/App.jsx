import { Dock, Home, Navbar, Welcome } from "#components";
import {
  Contact,
  Finder,
  Photos,
  Resume,
  Safari,
  Terminal,
  Text,
} from "#windows";

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
      <Text />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;
