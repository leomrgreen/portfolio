import arrow from "../assets/arrowdown.svg"
import { ReactTyped } from "react-typed"

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner">
      <div className="welcome">
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
        <button className="readmore-btn">Read More <img src={arrow} alt="arrow down icon" /> </button>
      </div>
      </div>
    </section>
  );
};

export default Banner;