
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons/faCopyright";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="hidden">
            <div className="left-side">
            <FontAwesomeIcon icon={faCopyright} /> Leo Jonsson 
            </div>
            <div className="middle">
                <address>jonssonleonardo@gmail.com</address>
                <p>+46737043031</p>
            </div>
            <div className="right-side">
                <a href="https://www.linkedin.com/in/leo-jonsson-b98048304/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/leomrgreen"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </footer>
    );
}

export default Footer