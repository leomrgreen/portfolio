import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons"
import responsive from "../images/Responsive-cuate.png"
import dayTime from "../images/day.png"
import nightTime from "../images/night.png"
import React, { useState } from 'react';
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import techStack from "../data/techStack"


const Skills = () => {
    const [isDay, setIsDay] = useState(true);

    const toggleDayNight = () => {
        setIsDay(!isDay);
    };

    return (
        <>
        <div className="skill-gradient"></div>
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
                        <div className="comp-card">
                            <div className="comp-nav">
                                <span className="dot close"></span>
                                <span className="dot minimize"></span>
                                <span className="dot open"></span>
                            </div>
                            <div className="comp-header">
                                <span className="avatar">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <span className="searchbar"></span>
                            </div>
                            <div className="comp-page"></div>
                        </div>   
                    </div>
                    <div className="skill-card right hidden">
                        <span className="tech-title">My Tech Stack</span>
                        <div className="bento-grid">
                            {techStack.map((stack, index) => (
                                <span key={index} className="stack">{stack}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skill-card dark-mode-skill">
                        <span className="comp-title">Dark Mode</span>
                        <div className="day-night-toggle">
                            <img src={isDay ? dayTime : nightTime} alt="Day or Night illustration" className="day-night" />
                            <button onClick={toggleDayNight} className="day-or-night">
                                {!isDay ? <FiSun className="sun-yel"/> : <BsFillMoonStarsFill className="moon-pur"/>}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
