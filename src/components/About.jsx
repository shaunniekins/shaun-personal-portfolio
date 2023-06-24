import React from "react";

const About = () => {
  return (
    <>
      <h3 id="about" className="text-xl md:text-2xl font-bold pt-20">
        About Me
      </h3>
      <div className="flex flex-col-reverse md:flex-row pt-10 pb-28 justify-center items-center">
        <div className="flex-shrink text-justify pt-6 md:pt-0">
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
