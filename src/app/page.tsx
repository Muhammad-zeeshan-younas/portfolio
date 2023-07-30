"use client";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-[#171e40]/40 scrollbar-thumb-[#08d463]/80 scroll-smooth">
      <header>
        <title>Portfolio.</title>
      </header>

      <Navbar />
      <section id="hero" className="snap-start">
        <Banner />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="services" className="snap-start">
        <Services />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
