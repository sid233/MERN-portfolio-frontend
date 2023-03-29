import React, { useState } from 'react'
import "./contact.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [inputvalue, setInputValue] = useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    message:""
  });

  const getvalue = (e) =>{
    const {name ,value} = e.target;
    setInputValue(() =>{
      return{
        ...inputvalue,
        [name]: value
      }
    })
    // setInputValue({ ...inputvalue, [name]: value })
  }

  const sentUserdata = async (e)=>{
    e.preventDefault();

    const { fname, lname, email, mobile, message} = inputvalue;
    if(fname === ""){
    toast.error("First Name is required !")
    }else if(lname === ""){
    toast.error("Last Name is required !")
    }else if(email === ""){
      toast.error("Email is required !")
    }else if(!email.includes("@" || ".")){
      toast.error("Invalid Email !")
    }else if(mobile === ""){
      toast.error("Mobile No is required !")
    }else{
      // calling api
      const res = await fetch("https://mern-portfolio-backend-6jsi.onrender.com/register",{
        method: "POST",
        headers: { 
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          fname, lname, email, mobile, message
        })
      });
        const data = await res.json();  
        console.log(data);

        if(data.status === 201){
          toast.success("Your Response submitted successfully !")
          
          setInputValue({
              ...inputvalue,
              fname:"",
              lname:"",
              email:"",
              mobile:"",
              message:""
          })
        }
    }
  }


  return (
    <>
    <div className='container mb-5 contact'>
      <h2 className='text-center mt-2 '>For any Feedback and Queries ... Feel free to contact</h2>
      <div className="container mt-5">
        <Form className='row mt-2'>
          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name='fname' value={inputvalue.fname} onChange={getvalue} />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name='lname' value={inputvalue.lname} onChange={getvalue} />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name='email' value={inputvalue.email} onChange={getvalue} />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control type="text" name='mobile' value={inputvalue.mobile} onChange={getvalue} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={7} name="message" value={inputvalue.message} onChange={getvalue} />
          </Form.Group>

          <div className='d-flex justify-content-center'>
            <Button variant="primary" className='col-lg-6' onClick={sentUserdata} type="submit" >
              Submit
            </Button>

          </div>
        </Form>
        <ToastContainer />
      </div>
    </div>
    </>
  )
}

export default Contact

























