import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="select-none bg-white-100">
      {/* <div className="bg-slate-500 pt-8 sticky top-0 "> */}
      <Navbar />
      {/* </div> */}
      <Intro />
      <div className="mx-12 md:mx-[10rem] xl:mx-[20rem]">
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
