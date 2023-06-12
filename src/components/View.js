import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';


function View() {


const [travel,setTravel]=useState({})

  const params=useParams()

 const fetchTravel= async()=>{
 const result= await axios.get('http://localhost:8000/getEmployee/'+params.id)
 setTravel(result.data.message);
}

useEffect(()=>{
 fetchTravel()
},[])

  return (
    <div>

<Row>

<div className='text-center'>
  <Image style={{ height: '500px', width: '50px',borderRadius:'20px' }} className='w-50 p-3' src={travel.photo} rounded />
</div>
<div className='text-center '>
  <Card className='text-center w-50 container mb-5 mt-5 bg-light' >
    <Card.Body>
      <Card.Title> <h3> package  Name  {travel.Package}</h3> </Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item style={{boxDecorationBreak:"none"}}  ><strong>Packager provider name  :  {travel.name} </strong></ListGroup.Item>
      <ListGroup.Item><strong>package Itinery : {travel.itinery} </strong></ListGroup.Item>
      <ListGroup.Item> <strong> Price :{travel.price} </strong></ListGroup.Item>
      <ButtonGroup size="lg" className="mb-2 text-center ms-6 mr-auto">
                       <Link to={`/book/${travel.id}`}>
                            <Button>    <a href='' style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-solid fa-file-pen"></i>BOOK NOW</a>
                            </Button>
                       </Link>
                    </ButtonGroup>
    </ListGroup>
  </Card>
</div>




</Row>



    </div>
  )
}

export default View