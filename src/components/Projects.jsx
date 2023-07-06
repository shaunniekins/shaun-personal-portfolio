import React, { useState } from "react";
import projectData from "../data/projectData";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  let count = 0;

  return (
    <div className="flex flex-col pb-28">
      <h3
        id="projects"
        className=" pt-10 md:pt-28 pb-5 md:pb-10 text-xl md:text-2xl font-bold">
        Projects
      </h3>
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full gap-y-10">
          {projectData.map((project) => (
            <ProjectItems
              key={project.title}
              imgUrls={project.imgUrls}
              title={project.title}
              description={project.description}
              stack={project.stack}
              demoLink={project.demoLink}
              repoLink={project.repoLink}
              count={count++}
            />
          ))}
          {count > 2 && (
            <div className="flex items-center justify-center">
              <button className="px-5 py-2 border-2 border-stone-900 rounded-2xl shadow-2xl hover:scale-110 bg-white text-black transition duration-300 ease-out hover:ease-in flex items-center gap-x-2">
                <ion-icon name="eye-outline"></ion-icon>
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
