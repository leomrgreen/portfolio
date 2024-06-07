import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRef, useState } from "react";

const Header = () => {
  const navRef = useRef();
  const [isNavActive, setIsNavActive] = useState(false);

  const showNavBar = () => {
    navRef.current.classList.toggle('active');
    setIsNavActive(!isNavActive);
  }

  return (
    <nav id='nav'>
      <a href="/" className="logo"><h1>Leo</h1></a>
      <ul ref={navRef} className="navLinks">
        <li><a href="#about-section" onClick={showNavBar}>About</a></li>
        <li><a href="#skills" onClick={showNavBar}>Skills</a></li>
        <li><a href="#projects" onClick={showNavBar}>Projects</a></li>
        <li><a href="#contact-section" onClick={showNavBar}>Contact</a></li>
      </ul>
      <a href="https://github.com/leomrgreen" className='github-logo'><FontAwesomeIcon icon={faGithub} /></a>
      <FontAwesomeIcon
        icon={isNavActive ? faXmark : faBars}
        className="burger"
        onClick={showNavBar}
      />
    </nav>
  );
}

export default Header;
