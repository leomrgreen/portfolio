import React, { useState } from "react";
import projects from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { TbFolderCode } from "react-icons/tb";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  function openModal(project) {
    setSelectedProject(project);
  }

  function closeModal() {
    setSelectedProject(null);
  }

  return (
    <section className="project-section" id="projects">
      <div className="projects-title">
        <h2 className="hidden">Projects</h2>
        <TbFolderCode className="folder-code" />
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card hidden" key={index}>
            <h4>{project.title}</h4>
            <span>{project.description}</span>
            <img 
              src={project.image.url} 
              alt={project.image.alt} 
              onClick={() => openModal(project)} 
            />
            <div className="project-tags-container">
              {project.tags.map((tag, tagIndex) => (
                <span className="tags" key={tagIndex}>{tag}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" className="src-code">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Portfolio;
