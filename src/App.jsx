import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="select-none bg-white-100">
      {/* <Header /> */}
      {/* <div className="mx-12  xl:mx-[20rem]"> */}
      <Intro />
      {/* </div> */}
      <div className="mx-12 xl:mx-[20rem]">
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
