import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faUserTie, faChartLine, faGears } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <section className="about-section">
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
            <svg xmlns="http://www.w3.org/2000/svg" height="22" width="19.5" viewBox="0 0 448 512">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 
            416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 
            243h-66.4V312c0-24.8-.5-.567-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
          </svg>
          </div>
          </a> 
        </div>
        <div className="about-card">
          <div className="card-title"><FontAwesomeIcon icon={faChartLine} />
          <span>My Goals</span></div>
        <p>My <span className="spanmark">main goal</span> is to become a <span className="spanmark">full-time front-end developer</span> and therefore I am to master Javascript. I am dedicated to continuous learning and tackling challenging projects to achieve this. 
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
  )
}

export default About