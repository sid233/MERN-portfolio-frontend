import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
      <div className="container home_container " style={{ fontSize: '22px' }}>
        <div className="home_innerdiv">

          <div className="left_div">
            <h2 className="m">Creativity Meets <span style={{ color: "#6c63ff" }}>Technology</span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 4 }}>My motivation and love for development as well as good design have brought me to where I am today. Every day I try to keep up with the latest technology trends.</p>
            <p>As a developer, my superpower happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
            <div className="btn_div mt-4">

              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "darkgreen", marginRight: 24 }}>
                <a href='https://www.hackerrank.com/chandelsiddhant1?hr_r=1' target="_blank" rel="noreferrer" className='text-decoration-none text-light'>HackerRank</a>
              </Button>
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "21262c", marginRight: 24 }}>
                <a href= "https://github.com/sid233" target="_blank" rel="noreferrer" className='text-decoration-none text-light'><i className="fa-brands fa-github"></i> Github</a>
              </Button>
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "darkblue", marginRight: 24 }}>
                <a href='https://www.linkedin.com/in/siddhant-singh-chandel-aa43a51a5/' target="_blank" rel="noreferrer" className='text-decoration-none text-light'> <i className="fa-brands fa-linkedin"></i> Linkedin</a>
              </Button>
          
            </div>
          </div>

          <div className="right_div">
            <img src='logo.svg' alt='' />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home