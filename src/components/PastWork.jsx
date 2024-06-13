import React from "react";
import projects from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { TbFolderCode } from "react-icons/tb";


const Portfolio = () => {
    return (
        <>
            <section className="project-section" id="projects">
               <div className="projects-title">
               <h2 className="hidden">Projects</h2> <TbFolderCode  className="folder-code" />
               </div>
                <div className="project-grid">
                {projects.map((project, index) => (
                <div className="project-card hidden" key={index}>
                    <h4>{project.title}</h4>
                    <span>{project.description}</span>
                    <img src={project.image.url} alt={project.image.alt} />
                    <a href={project.github} target="_blank" className="src-code"><FontAwesomeIcon icon={faCode} /> </a>
                </div>
            ))}
                </div>
            </section>
        </>
    );
}

export default Portfolio