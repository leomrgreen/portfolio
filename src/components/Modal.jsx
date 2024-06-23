import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal flex-center">
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          <FontAwesomeIcon icon={faXmarkCircle} className="close-icon" />
        </span>
        <h1 className="modal-title">{project.title}</h1>
        <img src={project.image.url} alt={project.image.alt} />
        <div className="modal-desc">
          <p>{project.description}</p>
          <span>Built with:</span>
          <div className="languages flex-center">
            {project.tags.map((tag, tagIndex) => (
              <span className="tags" key={tagIndex}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
