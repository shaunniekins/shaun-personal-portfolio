import React, { useState } from "react";

const ProjectItems = ({
  title,
  description,
  imgUrls,
  stack,
  demoLink,
  repoLink,
  count,
  showAllProjects,
  theme,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = imgUrls.length;

  const handlePrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? totalImages - 1 : prevImage - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === totalImages - 1 ? 0 : prevImage + 1
    );
  };

  if (showAllProjects || !(count > 2)) {
    return (
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-between content-between">
        <div className="text-proj flex-1 flex flex-col flex-grow">
          <h3 className="text-base md:text-3xl font-semibold mb-1">{title}</h3>
          <p className="text-sm md:text-lg">{description}</p>
          <p className="my-10 flex flex-wrap gap-3 flex-row text-xs md:text-sm">
            {stack.map((item) => (
              <span
                key={item}
                className={`px-2 py-1 font-semibold border-2 rounded-md ${
                  theme === "dark" ? "border-white" : "border-stone-900"
                }`}>
                {item}
              </span>
            ))}
          </p>
          <div className="flex gap-x-10">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-400 cursor-pointer p-1 rounded-md flex items-center duration-500">
                <h8 className="flex items-center gap-x-2">
                  <p className="hidden md:block">Live Demo</p>
                  <ion-icon name="open"></ion-icon>
                </h8>
              </a>
            )}
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gray-400 cursor-pointer p-1 rounded-md flex items-center duration-500">
                <h8 className="flex items-center gap-x-2">
                  <p className="hidden md:block">Code Repo</p>
                  <ion-icon name="logo-github"></ion-icon>
                </h8>
              </a>
            )}
          </div>
        </div>
        <div className="image-proj flex flex-1 justify-center  text-purple-900">
          <button
            onClick={handlePrevImage}
            className="-mr-14 transition-transform duration-300 ease-in-out transform hover:scale-125">
            <ion-icon name="arrow-back" size="large"></ion-icon>
          </button>

          <div className="h-80 md:h-80 lg:h-80 w-full">
            <img
              className="h-full object-contain w-full rounded-3xl"
              src={imgUrls[currentImage]}
              alt="Portfolio"
            />
          </div>

          <button
            onClick={handleNextImage}
            className="-ml-14 transition-transform duration-300 ease-in-out transform hover:scale-125">
            <ion-icon name="arrow-forward" size="large"></ion-icon>
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ProjectItems;
