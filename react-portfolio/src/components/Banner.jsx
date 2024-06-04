import banner from "../images/banner.png"

const Banner = () => {
  return (
    <section className="banner">
      <div className="welcome">
        <h1>Hi there,</h1>
        <h2>I Am Into <span className="dev-type">Web Development</span></h2>
      </div>
      <div className="banner-img-container">
        <img src={banner} alt="guy in a chair programming" />
      </div>
    </section>
  );
};

export default Banner;