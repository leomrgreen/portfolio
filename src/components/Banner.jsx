import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <>
      <div className="banner-img top-gradient"></div>
      <section className="banner-section flex-center">
        <div className="banner flex-center">
          <div className="welcome hidden flex-center">
            <h1 className="flex-center">Hi there,</h1>
            <h2 className="flex-center">
              I Am Into
              <ReactTyped
                strings={["Web Development", "Design", "Front End Development"]}
                typeSpeed={45}
                backSpeed={50}
                loop
                className="dev-type"
              ></ReactTyped>{" "}
            </h2>
          </div>
          <a href="#about-section" className="readmore-btn flex-center">
            Read More <FontAwesomeIcon icon={faCircleArrowDown} />{" "}
          </a>
        </div>
      </section>
      <div className="banner-img bottom-gradient"></div>
    </>
  );
};

export default Banner;
