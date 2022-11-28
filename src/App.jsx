import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Bio from "./pages/Bio/Bio";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Logo from "./components/Logo/Logo";
function App() {
  return (
    <Routes>
      <Route
        path="/portfolio-page"
        element={
          <>
            <Logo />
            <Home />
          </>
        }
      />
      <Route
        path="/portfolio-page/about"
        element={
          <>
            <Logo />
            <Bio />
          </>
        }
      />
      <Route
        path="/portfolio-page/projects"
        element={
          <>
            <Logo />
            <Projects />
          </>
        }
      />
      <Route
        path="/portfolio-page/skills"
        element={
          <>
            <Logo />
            <Skills />
          </>
        }
      />
      <Route
        path="/portfolio-page/experience"
        element={
          <>
            <Logo />
            <Experience />
          </>
        }
      />
      <Route
        path="/portfolio-page/contact"
        element={
          <>
            <Logo />
            <Contact />
          </>
        }
      />
    </Routes>
  );
}

export default App;
