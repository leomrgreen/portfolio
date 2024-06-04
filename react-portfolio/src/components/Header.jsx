import github from "../assets/github.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";

const Header = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('active')
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
      <FontAwesomeIcon icon={faBars} className="burger" onClick={showNavBar}/>
    </nav>
  );
}

export default Header;