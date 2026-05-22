import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Achievements from "./sections/Achievements";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


function App() {
  const [theme, setTheme] = useState("dark");

  const toggle = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} toggle={toggle} />
      {/* <Hero /> */}
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Education />
      <Achievements />
      {/* <Blog /> */}
      <Contact  />
      <Footer />
    </>
  );
}

export default App;
