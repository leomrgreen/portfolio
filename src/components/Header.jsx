import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import DarkMode from "./DarkMode";

const Header = () => {
  const navRef = useRef();
  const [isNavActive, setIsNavActive] = useState(false);

  const showNavBar = () => {
    if (isNavActive) {
      navRef.current.classList.add("slideOut");
      setTimeout(() => {
        navRef.current.classList.remove("active", "slideOut");
        setIsNavActive(false);
      }, 200);
    } else {
      navRef.current.classList.add("active");
      setIsNavActive(true);
    }
  };

  document.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    window.scrollY > 0
      ? nav.classList.add("scroll")
      : nav.classList.remove("scroll");
  });

  return (
    <nav id="nav" className="hidden">
      <a href="/" className="logo">
        <h1>Leo</h1>
      </a>
      <ul ref={navRef} className="navLinks">
        <li>
          <a href="#about-section" onClick={showNavBar}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={showNavBar}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={showNavBar}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact-section" onClick={showNavBar}>
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-right">
        <DarkMode />
        <a href="https://github.com/leomrgreen" className="github-logo">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <FontAwesomeIcon
        icon={isNavActive ? faXmark : faBars}
        className="burger"
        onClick={showNavBar}
      />
    </nav>
  );
};

export default Header;
