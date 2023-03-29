import React from 'react'
import "./footer.css"

const Footer = () => {

  let year = new Date().getFullYear();

  return (
    <>
      <div className='footer'>
        <div className="container foort_container d-flex justify-content-around flex-wrap">
          <div className='first mt-5'>
            <h4>Sid Chandel</h4>
            <p>© {year} Siddhant Singh Chandel
              All rights reserved</p> 
            <p className="d-flex mt-4">
             <a href='https://www.linkedin.com/in/siddhant-singh-chandel-aa43a51a5/'><i className="fa-brands fa-linkedin fa-2xl"></i></a>
             <a href='https://www.facebook.com/chandelsiddhantsingh'> <i className="fa-brands fa-facebook mx-3 fa-2xl"></i></a>
              <a href= "https://github.com/sid233"><i className="fa-brands fa-github fa-2xl"></i></a>
            </p>
          </div>
          <div className='second  mt-5'>
            <h4>Get in Touch</h4>
            <p>For any queries and feedback feel free to contact at </p>
            <p><span><a href="mailto:siddhantsinghchandel4@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-sharp fa-solid fa-envelope"></i></a></span><span> &nbsp;&nbsp; siddhantsinghchandel4@gmail.com </span></p>
            <p>+91 8934884366</p>
          </div>
          <div className='third  mt-5 mb-5'>
            <h4>About</h4>
            <p>My Portfolio </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer