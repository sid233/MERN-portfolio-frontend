import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from './data2';
import Spinner from 'react-bootstrap/Spinner';


const Certifications = () => {
    const [spin, setSpin] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setSpin(false)
        }, 1000)
    }, [])


    return (
        <>


            {
                spin ? <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
                    <Spinner animation="border" variant="danger" />&nbsp; &nbsp; Loading .....</div> : <div className='container'>
                    <h3 className="text-center mt-4">MOOC Certifications from IIT (NPTEL) and other certifications</h3>
                    <div className="card_div">
                        <div className="row d-flex justify-content-around align-items-center">
                            {
                                projectData.map((el, index) => {
                                    return (
                                        <>
                                            <Card style={{ width: '40rem', height: "25rem", background:'antiquewhite' }} className="mt-4 mb-4 mx-auto my-auto" >
                                                <Card.Img variant="top" style={{ width: '24rem' }} src={el.imgsrc} className="mx-auto mt-2" />
                                                <Card.Body className='d-flex justify-content-center flex-column'>
                                                    <Card.Title className='text-center'>{el.projectName}</Card.Title>

                                                    <Button variant="primary" style={{width: '12rem' }} className="mx-auto mt-1" >
                                                        <a href={el.demo} target="_blank" rel="noreferrer" className='text-decoration-none text-light'>View Certificate</a>
                                                    </Button>


                                                </Card.Body>
                                            </Card>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Certifications