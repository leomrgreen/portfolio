import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ReactTyped } from "react-typed"

const Banner = () => {
  return (
    <>
    <section className="banner-section">
      <div className="banner">
      <div className="welcome hidden">
        <h1>Hi there,</h1>
        <h2>I Am Into 
          <ReactTyped strings={[
            "Web Development",
            "Design",
            "Front End Development"
          ]}
          typeSpeed={45}
          backSpeed={50}
          loop
          className="dev-type">
          </ReactTyped> </h2>
      </div>
      <a href="#about-section" className="readmore-btn">Read More <FontAwesomeIcon icon={faCircleArrowDown} /> </a>
      </div>
    </section>
    <div className="banner-img"></div>
    </>
  );
};

export default Banner;