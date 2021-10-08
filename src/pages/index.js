import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import { AboutObj, ProjectObj } from "../components/AboutSection/Data";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection {...AboutObj} />
      <ProjectsSection {...ProjectObj} />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
