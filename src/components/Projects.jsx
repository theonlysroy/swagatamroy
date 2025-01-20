/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa6";
import { projects } from "../constants/projects";

export default function Projects() {
  const projectLength = projects.length;
  return (
    <div id="project" className="mt-20 w-full px-4">
      <h1 className="text-2xl my-4">Projects</h1>
      <div className="border-b border-dashed border-neutral-600"></div>
      {/* project cards */}
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            project={project}
            isLastIndex={index === projectLength - 1}
          />
        ))}
      </div>
      <div className="border-t-[.5px] border-dashed border-neutral-600"></div>
    </div>
  );
}

function ProjectCard({ project, index, isLastIndex }) {
  return (
    <div
      className={`bg-transparent dark:bg-neutral-800 w-full sm:w-1/2 p-4 hover:shadow-md hover:shadow-orange-400 transition-all duration-300  ${
        index % 2 === 1 ? "" : "border-r"
      } ${isLastIndex ? "" : "border-b"} border-dashed border-neutral-600`}
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        {project?.name || "Dummy App"}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 my-2">
        {project?.description || "A small description for the dummy project"}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <a
          href={project?.github || "https://github.com/theonlysroy"}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-orange-400"
        >
          <FaGithub size={24} />
        </a>
        <a
          href={project?.live || "https://github.com/theonlysroy"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          Live Preview
        </a>
      </div>
    </div>
  );
}
