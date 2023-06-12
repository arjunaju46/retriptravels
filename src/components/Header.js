import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
function Header() {

  return (

    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><strong>RE <span style={{color:'orange'}}>TRIP</span></strong></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">

            </Nav.Link>

            <ButtonGroup size="lg" className="mb-2 ms-2">
                       <Link to={'/login'}>
                            <Button>    <a href='' style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-solid fa-file-pen"></i>LOGIN</a>
                            </Button>
                       </Link>
                    </ButtonGroup>



                    <ButtonGroup size="lg" className="mb-3">
                       <Link to={'/sign'}>
                            <Button>    <a href='' style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-solid fa-file-pen"></i>SIGNUP</a>
                            </Button>
                       </Link>
                    </ButtonGroup>
          

             </Nav>
        </Container>
      </Navbar>





    </div>



  )
}

export default Header