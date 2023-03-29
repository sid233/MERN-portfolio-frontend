import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-5 about_container" style={{ minHeight: "100%" , fontSize:'17px' }}>
        <div className="main_container container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Hey! I'm a MERN developer</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>Hello, I'am Sid Chandel a Junior Full stack Web Developer , programmer, MERN Developer and Cybersecurity enthusiast. I have completed my graduation in Electrical Engineering (B.Tech honours) in 2023 from Government Engineering College Mainpuri (U.P.) . I’ve always been someone who has both a creative and a logical side.When I discovered Web Development in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code.<br/>I have also worked on arduino based smart shoe for blind people as my Major project (Research paper is in progress).</p>
            <p>
              Check out my Projects, skills, resume, certifications and my profile.
            </p>
              Feel free to contact me.
          </div>
          <div className="right_container mt-3">
            <img src="sid2.jpg" alt="img" id='about_img' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About