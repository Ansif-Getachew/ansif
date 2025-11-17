import React, { useState } from "react";
import "./App.css";
import { MobileMenu } from "./components/MobileMenu";
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Project";
import { Contact } from "./components/sections/Contact";
import { Navbar } from "./components/Navbar";
import emailjs from '@emailjs/browser';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Contact />
      <Projects />
    </>
  );
}

export default App;