import React, { useState } from "react";
import projectData from "../data/projectData";
import ProjectItems from "./ProjectItems";

const Projects = ({ showAllProjects, setShowAllProjects }) => {
  let count = 0;

  const handleViewAllClick = () => {
    setShowAllProjects(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoBack = () => {
    setShowAllProjects(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col pb-28">
      {showAllProjects ? (
        <h3
          id="projects"
          className="pt-10 md:pt-28 pb-5 md:pb-10 text-xl md:text-2xl font-bold flex items-center cursor-pointer"
          onClick={handleGoBack}>
          <ion-icon name="arrow-back-outline"></ion-icon>
          <span className="ml-2">Projects</span>
        </h3>
      ) : (
        <h3
          id="projects"
          className="pt-10 md:pt-28 pb-5 md:pb-10 text-xl md:text-2xl font-bold">
          Projects
        </h3>
      )}

      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full gap-y-10">
          {projectData.map((project, count) => (
            <ProjectItems
              key={`${project.title}_${count}`}
              imgUrls={project.imgUrls}
              title={project.title}
              description={project.description}
              stack={project.stack}
              demoLink={project.demoLink}
              repoLink={project.repoLink}
              count={count++}
              showAllProjects={showAllProjects}
            />
          ))}
          {/* {count > 2 && ( */}
          {!showAllProjects && (
            <div className="flex items-center justify-center">
              <button
                className="px-5 py-2 border-2 border-stone-900 rounded-2xl shadow-2xl hover:scale-110 bg-white text-black transition duration-300 ease-out hover:ease-in flex items-center gap-x-2"
                onClick={handleViewAllClick}>
                <ion-icon name="eye-outline"></ion-icon>
                View All
              </button>
            </div>
          )}

          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
