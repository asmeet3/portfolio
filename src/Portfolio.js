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
      <div class="blob"></div>
      <div class="header-container">
        <div class="name">
          <div class="name-row1">Hey, I am</div>
          <div class="name-row2"><span style={{ color: "#D800DC" }}>Asmeet</span>  Singh</div>
          <div class="name-row3">&lt;software developer&gt;  <span style={{ fontFamily: 'Open Sans' }}>|</span> <span style={{ fontFamily: 'Homemade Apple' }}>designer</span></div>
        </div>
        <div class="photo">
          <div class="photo-row"> <img className="myphoto" src={require("./photo.png")} alt="" /><div className="ellipse1" /><div className="ellipse2" /></div>
        </div>
      </div>

      <div className="header-content-partition">
        <img className="content-arrow" src={require("./down-arrow.png")} alt="" />
      </div>

      <div className="about-section">
        <div class="section-header">ABOUT</div>
      </div>

      <div className="projects-section">
        <div class="section-header">PROJECTS</div>
      </div>

      <div className="contact-section">
       <div class="section-header">CONTACT ME</div>
      </div>

    </div>
  );
}

export default Portfolio;
