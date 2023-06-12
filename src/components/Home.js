import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Slider from './Slider';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// import Col from 'react-bootstrap/Col';


function Home() {

    const [Travels, setTravels] = useState([])


    // api call
    const fetchTravels = async () => {
        const result = await axios.get('http://localhost:8000/getTravels')
        setTravels(result.data.message);
    }


    useEffect(() => {
        fetchTravels()
    }, [])



    return (
        // carosil


           
        // card
        <div >
                       <Slider/>




            <Row className='ms-5 mb-2 p-2'>

                {
                    Travels?.map(travel => (
                        < Col lg={4} md={6}>

                            <Card className='mt-5 ms-5' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={travel.photo} />
                                <Card.Body>
                                    <Card.Title>{travel.Package}</Card.Title>
                                    <Card.Text>
                                        {travel.itinery}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{travel.price} $ </ListGroup.Item>
                                    <ListGroup.Item>  {travel.name}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>



                                    <ButtonGroup size="lg" className="mb-2">
                                        <Link to={`view/${travel.id}`}>
                                            <Button> <a href='' style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-solid fa-eye"></i>VIEW</a>
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>

                        </Col>

                    )

                    )
                }

            </Row>



        </div>







    )
}

export default Home