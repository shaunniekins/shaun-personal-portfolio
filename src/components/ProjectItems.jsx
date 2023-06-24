import React, { useState } from "react";

const ProjectItems = ({ title, description, imgUrls, stack, link, count }) => {
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

  return (
    <>
      {(() => {
        if (!(count > 2)) {
          return (
            <div className="flex flex-col md:flex-row w-lg rounded-medium gap-x-30">
              <div className="w-full p-3">
                <h3 className="text-base md:text-3xl mb-2 md:mb-3 font-semibold">
                  {title}
                </h3>
                <p className="">{description}</p>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
                      {item}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center justify-center mt-4 md:mt-0">
                <button onClick={handlePrevImage} className="-mr-8">
                  <ion-icon name="arrow-back"></ion-icon>
                </button>
                <img
                  src={imgUrls[currentImage]}
                  alt="Portfolio"
                  className="h-40 md:h-52 object-cover w-full"
                />
                <button onClick={handleNextImage} className="-ml-8">
                  <ion-icon name="arrow-forward"></ion-icon>
                </button>
              </div>
            </div>
          );
        }
      })()}
    </>
  );
};

export default ProjectItems;
