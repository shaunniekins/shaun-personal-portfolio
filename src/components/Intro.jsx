import React, { useState, useEffect, useRef } from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";

const Intro = ({ theme, showModal, setShowModal }) => {
  const linkedinButtonRef = useRef(null);
  const contactButtonRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const imageUrls = ["./assets/shaun.jpg", "./assets/shaun1.jpeg"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageUrls.length]);

  return (
    <>
      <div
        id="intro"
        className={`pt-28 min-h-60vh md:min-h-90vh  -mt-20 ${
          theme === "dark"
            ? "shadow-md shadow-white"
            : "shadow-md dark:bg-gray-900"
        }`}>
        {/* <Navbar /> */}
        <div className="mx-12 md:mx-[10rem] xl:mx-[20rem] flex flex-col py-10 md:py-48 md:flex-row justify-start items-center">
          <div className="flex flex-col items-center md:items-end md:flex-row">
            <div className="rounded-full overflow-hidden w-44 h-44 md:w-64 md:h-64 mb-4 md:mb-0 md:mr-10">
              <img
                src={imageUrls[currentImage]}
                alt="Shaun Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-intro text-center md:text-left md:self-center">
              <h2 className="text-4xl md:text-7xl font-extrabold font-inter md:mb-2">
                Hi, I'm Shaun.
              </h2>

              <h3 className="text-base md:text-2xl md:mb-10">
                Fullstack Web Developer
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-4 md:mt-0 ">
                <button
                  ref={contactButtonRef}
                  className="px-4 py-3 rounded-xl hover:scale-110 bg-gray-200 text-black transition duration-300 ease-out hover:ease-in"
                  onClick={() => {
                    setShowModal(true);
                  }}>
                  <div className="flex items-center gap-x-2">
                    <ion-icon name="send" size="small"></ion-icon>
                    <p className="hidden md:block">Contact Me!</p>
                  </div>
                </button>
                <a
                  href="https://www.linkedin.com/in/shaun-niel-ochavo-97915a232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center ">
                  <button
                    ref={linkedinButtonRef}
                    className="px-4 py-3 rounded-xl hover:scale-110 bg-black text-white transition duration-300 ease-out hover:ease-in">
                    <div className="flex items-center gap-x-2">
                      <ion-icon name="logo-linkedin" size="small"></ion-icon>
                      <p className="hidden md:block">Let's connect! </p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {showModal && (
            <Contact
              showModal={showModal}
              setShowModal={setShowModal}
              theme={theme}
            />
          )}
        </div>
      </div>

      <div className="flex justify-center pt-10 animate-bounce transform rotate-180 text-4xl">
        <ion-icon name="arrow-down-outline" className="Arrow Down"></ion-icon>
      </div>
    </>
  );
};

export default Intro;
