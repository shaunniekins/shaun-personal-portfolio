import React, { useState } from "react";
import projectData from "../data/projectData";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  let count = 0;

  return (
    <div className="flex flex-col">
      <h3 id="projects" className="text-xl md:text-2xl font-bold underline">
        Projects
      </h3>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center py-10">
          <div className="grid grid-cols-1 gap-y-10">
            {projectData.map((project) => (
              <ProjectItems
                imgUrls={project.imgUrls}
                title={project.title}
                description={project.description}
                stack={project.stack}
                link={project.link}
                count={count++}
              />
            ))}

            <div className="flex items-center justify-center">
              <button className="px-5 py-2 border-2 border-stone-900 rounded-2xl shadow-2xl hover:scale-110 bg-white text-black transition duration-300 ease-out hover:ease-in flex items-center gap-x-2">
                <ion-icon name="eye-outline"></ion-icon>
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
