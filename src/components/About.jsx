import React from "react";

const About = () => {
  return (
    <>
      <h3
        id="about"
        className="text-xl md:text-2xl font-bold pt-10 md:pt-28 pb-5 md:pb-10">
        About Me
      </h3>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex-shrink text-justify">
          <p>
            Hi, my name is Shaun Niel Ochavo. I am a Front-end Developer. I love
            creating interactive interfaces and developing web applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
