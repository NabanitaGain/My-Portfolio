import React from "react";
import Banner from "../components/Banner";
import About from "../pages/About";
import Skills from "./skill";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
