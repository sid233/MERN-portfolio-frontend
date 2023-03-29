import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';


const Header = () => {

    const common ={
        marginRight:15,
        fontSize:22,
        letterSpacing: ".5px"
    }
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <div>
                        <h2 className='mt-2 h2_right' style={{ color: "purple" }}>
                            <Nav.Link href="#home">Sid Chandel</Nav.Link>
                        </h2>
                    </div>

                    <Nav className='mt-2' >
                        <div>
                            <NavLink to="/" className='text-decoration-none' style={common}>Home</NavLink>
                            <NavLink to="/about" className='text-decoration-none' style={common}>About</NavLink>
                            <NavLink to="/contact" className='text-decoration-none' style={common}>Contact</NavLink>
                            <NavLink to="/playlist" className='text-decoration-none' style={common}>Projects</NavLink>
                            <NavLink to="/resume" className='text-decoration-none' style={common}>Resume</NavLink>
                            <NavLink to="/certifications" className='text-decoration-none' style={common}>Certifications</NavLink>
                        </div>
                       
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header 