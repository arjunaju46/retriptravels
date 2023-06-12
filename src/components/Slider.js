import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';


function Slider() {
  return (
    <div>

<Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/wB8rG5rr/pexels-amar-saleem-322742.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
            <h3 style={{textAlign:'top' ,color:'black'}}>WELCOME TO RETRIP</h3>
            <h4 style={{color:'orange'}}>Your Pocket Friendly Planar</h4>

        <ButtonGroup size="lg" className="mb-2">
                       <Link to={'/list'}>
                            <Button>    <a href='' style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-solid fa-file-pen"></i>BECOME A TRAVEL AGENT <br />View Your Listed Packages </a>
                            </Button>
                       </Link>
                    </ButtonGroup>

        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>


    </div>
  )
}

export default Slider