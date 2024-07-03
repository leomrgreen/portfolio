import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCode } from "@fortawesome/free-solid-svg-icons";
import responsive from "../assets/responsive-web.svg";
import tailwind_component from "../assets/component.svg";
import dayTime from "../images/day.png";
import nightTime from "../images/night.png";
import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import techStack from "../data/techStack";
import approach from "../assets/approach.svg";
import Carousel from "./Carousel";
import { slides } from "../data/carouselData.json";

const Skills = () => {
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  return (
    <section className="tech-stack" id="skills">
      <div className="skills-title">
        <h2 className="skills-title">SKILLS</h2>
        <FontAwesomeIcon icon={faCode} />
      </div>
      <div className="skill-grid left hidden">
        <div className="skill-card response">
          <span className="response-title">RESPONSIVE WEB DESIGN</span>
          <img src={responsive} alt="illustration of a responsive website" />
        </div>
        <div className="skill-card right hidden">
          <span className="comp-title">Building Components</span>
          <img
            src={tailwind_component}
            alt="tailwind component illustration"
            className="tailwind-comp"
          />
        </div>
        <div className="skill-card robot-card hidden">
          <div className="robot">
            <img src={approach} alt="robot" className="robot-img" />
          </div>
          <div className="approach">
            <span className="approach-title">APPROACH</span>
            <ul className="approach-list">
              <li className="list-item">
                <FontAwesomeIcon icon={faCheckCircle} className="checkMark" />{" "}
                Design
              </li>
              <li className="list-item">
                <FontAwesomeIcon icon={faCheckCircle} className="checkMark" />{" "}
                Develop
              </li>
              <li className="list-item">
                <FontAwesomeIcon icon={faCheckCircle} className="checkMark" />{" "}
                Deploy
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-card right hidden">
          <span className="tech-title">My Tech Stack</span>
          <div className="bento-grid">
            {techStack.map((stack, index) => (
              <span key={index} className="stack">
                {stack}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-card dark-mode-skill">
          <span className="comp-title">Dark Mode</span>
          <div className="day-night-toggle">
            <img
              src={isDay ? dayTime : nightTime}
              alt="Day or Night illustration"
              className="day-night"
            />
            <button onClick={toggleDayNight} className="day-or-night">
              {!isDay ? (
                <FiSun className="sun-yel" />
              ) : (
                <BsFillMoonStarsFill className="moon-pur" />
              )}
            </button>
          </div>
        </div>
        <div className="skill-card carousel-card">
          <span className="comp-title">Responsive Carousel</span>
          <Carousel data={slides} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
