import React from "react"
import './Portfolio.css';

function Portfolio() {

  return (
    <div className='pagebackground'>

      <div className='navbar'>
        <div className='navbar-content'>
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="blob"></div>
      <div className="header-container">
        <div className="name">
          <div className="name-row1">Hey, I am</div>
          <div className="name-row2"><span style={{ color: "#D800DC" }}>Asmeet</span>  Singh</div>
          <div className="name-row3">&lt;software developer&gt;  <span style={{ fontFamily: 'Open Sans' }}>|</span> <span style={{ fontFamily: 'Homemade Apple' }}>designer</span></div>
          <div className="socials"><a href="https://github.com/asmeet3" target="_blank" rel="noreferrer"><img className="social-icon" src={require("./assets/github.png")} alt="" /></a> <a href="https://www.linkedin.com/in/asmeet3/" target="_blank" rel="noreferrer"><img className="social-icon" src={require("./assets/linkedin.png")} alt="" /></a></div>
        </div>
        <div className="photo">
          <div className="photo-row"> <img className="myphoto" src={require("./assets/photo.png")} alt="" /><div className="ellipse1" /><div className="ellipse2" /></div>
        </div>
      </div>

      <div className="header-content-partition">
        <img className="content-arrow" src={require("./assets/down-arrow.png")} alt="" />
      </div>

      <div className="about-section">
        <div class="section-header">ABOUT</div>
        <div class="section-content">Software developer and UI/UX designer currently pursuing my B.Tech in Computer Science from Jaypee Institute of Information Technology, Noida. I bring a unique blend of technical expertise and creative flair to the table. With a keen eye for design and a strong coding foundation, I enjoy creating intuitive and visually appealing digital experiences. <br></br><br></br><br></br><br></br></div>
        <div className="section-content">TECHNICAL SKILLS: </div>
        <div className="skills">
          <img className="skill-icon" src={require("./assets/cpp.png")} alt="" />
          <img className="skill-icon" src={require("./assets/react.png")} alt="" />
          <img className="skill-icon" src={require("./assets/javascript.png")} alt="" />
          <img className="skill-icon" src={require("./assets/html.png")} alt="" />
          <img className="skill-icon" src={require("./assets/css.png")} alt="" />
          <img className="skill-icon" src={require("./assets/flask.png")} alt="" />
          <img className="skill-icon" src={require("./assets/firebase.png")} alt="" />
          <img className="skill-icon" src={require("./assets/sql.png")} alt="" />
          <img className="skill-icon" src={require("./assets/figma.png")} alt="" />
          <img className="skill-icon" src={require("./assets/photoshop.png")} alt="" />
          <img className="skill-icon" src={require("./assets/illustrator.png")} alt="" />
          <img className="skill-icon" src={require("./assets/installshield.png")} alt="" />
        </div>
      </div>

      <div className="projects-section">
        <div class="section-header">PROJECTS</div>
      </div>

      <div className="contact-section">
       <div class="section-header">CONTACT ME</div>
       <div class="section-content">Email: asmeet003@gmail.com<br></br>Linkedin: www.linkedin.com/in/asmeet3</div>
      </div>

      <div className="page-end"/>

    </div>
  );
}

export default Portfolio;
