import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faUserTie, faChartLine, faGears, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import aboutdev from "../images/dev.png"

const About = () => {
  return (
   <>
     <section className="about-section hidden" id='about-section'>
      <div className='about-title'><h2>About</h2> <FontAwesomeIcon icon={faCircleInfo} className='fa-info'/></div>
      <div className="about-container">
        <div className="about-card">
        <div className="card-title"> <FontAwesomeIcon icon={faUserTie} />
          <span>Background</span></div>
          <p>I'm a <span className="spanmark">22-year-old front-end development student</span> currently studying at <span className="spanmark">Noroff University</span>. 
            I'm based in <span className="spanmark">Stockholm, Sweden</span> & I am passionate about creating intuitive and engaging web experiences. 
            My education at Noroff University has equipped me with the skills and knowledge to bring innovative designs to life, with a <span className="spanmark">strong focus on usability and performance</span>.
          </p>
          <p>  When I'm not immersed in coding and design, <span className="spanmark">I love to explore new places and cultures</span>. 
            Additionally, I enjoy spending quality time with my friends, whether we're exploring things or simply enjoying each other's company.</p>
            <a href="https://www.linkedin.com/in/leo-jonsson-b98048304/" className='findMeLink'>
          <div className="findMe">
           Find Me On LinkedIn
           <FontAwesomeIcon icon={faLinkedin} className='linkedInIcon' />
          </div>
          </a> 
        </div>
        <div className="about-card">
          <div className="card-title"><FontAwesomeIcon icon={faChartLine} />
          <span>My Goals</span></div>
        <p>My <span className="spanmark">main goal</span> is to become a <span className="spanmark">full-time front-end developer</span> and therefore I aim to master Javascript. I am dedicated to continuous learning and tackling challenging projects to achieve this. 
          Alongside this, I aim to explore various frameworks and libraries like <span className="spanmark">React, Vue.js</span>, and <span className="spanmark">Angular</span> to become a versatile and well-rounded developer. </p>
          </div>
        <div className="about-card">
        <div className="card-title">
        <FontAwesomeIcon icon={faGears} />
         <span>Currently Working On</span>
        </div>
        <p>Right now, I'm working on my understanding and skills for <span className="spanmark">React.js, Next.js, Tailwind CSS and Bootstrap CSS</span>.  
        </p>
        <p>I'm also working on learning the <span className="spanmark">basics and fundamental parts of back-end development</span></p>
        </div>
      </div>
    </section>
    <img src={aboutdev} alt="developer in his chair" className='dev-chair hidden'/>
   </>
  )
}

export default About