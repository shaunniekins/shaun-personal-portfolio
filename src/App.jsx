import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //the reason navbar links suddenly move
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showModal]);

  return (
    <div
      className={`select-none  ${
        theme === "dark" ? "bg-[#1A202C]" : "bg-white-100"
      }
      ${theme === "dark" ? "text-white" : ""}`}>
      <Navbar
        setShowAllProjects={setShowAllProjects}
        toggleTheme={toggleTheme}
        theme={theme}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {showAllProjects ? (
        <div className="mx-12 md:mx-[10rem] xl:mx-[20rem]">
          <Projects
            showAllProjects={showAllProjects}
            setShowAllProjects={setShowAllProjects}
          />
        </div>
      ) : (
        <>
          <Intro
            theme={theme}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <div className="mx-12 md:mx-[10rem] xl:mx-[20rem]">
            <About />
            <Projects setShowAllProjects={setShowAllProjects} theme={theme} />
          </div>
        </>
      )}
      <div className="mx-12 md:mx-[10rem] xl:mx-[20rem]">
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default App;
