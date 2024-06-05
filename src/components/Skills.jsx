import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons"
import responsive from "../images/Responsive-cuate.png"


const Skills = () => {
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
                            <span className="stack">HTML5</span>
                            <span className="stack">CSS3</span>
                            <span className="stack">TAILWIND CSS</span>
                            <span className="stack">REACT.JS</span>
                            <span className="stack">JAVASCRIPT</span>
                            <span className="stack">FIGMA</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills