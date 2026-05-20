import React from "react";
import Hero from "./Hero/Hero";
import TechStacks from "./TechStacks/TechStacks";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
  <>
    <Hero />
    <TechStacks />
    <Projects />
    <Experience />
    <Contact />
  </>
  );
};

export default Home;
