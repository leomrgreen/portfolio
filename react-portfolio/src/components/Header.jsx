import github from "../assets/github.svg";

const Header = () => {
  return (
    <nav>
      <h1 className="logo">Leo</h1>
      <ul>
        <li>About</li>
        <li>Past Work</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
      <img src={github} alt="github logo" />
    </nav>
  );
}

export default Header;