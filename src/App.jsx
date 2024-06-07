import { useEffect } from "react";
import Header from "./components/Header"
import Banner from "./components/Banner";
import About from "./components/About"
import Skills from "./components/Skills";
import Portfolio from "./components/PastWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const toggleVisibility = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.remove("visible");
          entry.target.classList.add("hidden");
        }
      });
    };

    const observer = new IntersectionObserver(toggleVisibility, {
      threshold: 0.1, 
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
