import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="select-none bg-white-100">
      <Navbar setShowAllProjects={setShowAllProjects} />
      {showAllProjects ? (
        <div className="mx-12 md:mx-[10rem] xl:mx-[20rem]">
          <Projects
            showAllProjects={showAllProjects}
            setShowAllProjects={setShowAllProjects}
          />
        </div>
      ) : (
        <>
          <Intro />
          <div className="mx-12 md:mx-[10rem] xl:mx-[20rem]">
            <About />
            <Projects setShowAllProjects={setShowAllProjects} />
          </div>
        </>
      )}
      <div className="mx-12 md:mx-[10rem] xl:mx-[20rem]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
