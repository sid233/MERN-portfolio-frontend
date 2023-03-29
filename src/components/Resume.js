import React from "react";
import './resume.css'



const Resume = () => {

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('cv.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'cvPDF.pdf';
        alink.click();
      })
    })
  }
  return (
    <>
      <center>
        <div className="container" style={{ height: "90vh" }}>

          <object data="cv.pdf" type="application/pdf" width="100%" height="200%">
            <p> Please use PC/Desktop mode to view in case pdf is not loading </p>
          </object>

        </div>

        <div  id="footer" >
          <h5 className="mt-2">Click on below button to download PDF file</h5>
          <button onClick={onButtonClick} className='btn mb-2'>
            Download PDF
          </button>
        </div>
      </center>
    </>
  );


}
export default Resume;
