import github from "../assets/github.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from "react";

const Header = () => {
  const navRef = useRef();
  const [isNavActive, setIsNavActive] = useState(false);

  const showNavBar = () => {
    navRef.current.classList.toggle('active');
    setIsNavActive(!isNavActive);
  }

  return (
    <nav>
      <h1 className="logo">Leo</h1>
      <ul ref={navRef} className="navLinks">
        <li>About</li>
        <li>Past Work</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <img src={github} alt="github logo" className="github-logo"/>
      <FontAwesomeIcon
        icon={isNavActive ? faXmark : faBars}
        className="burger"
        onClick={showNavBar}
      />
    </nav>
  );
}

export default Header;
