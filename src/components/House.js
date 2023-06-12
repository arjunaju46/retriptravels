import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import axios from 'axios';


function House() {



  const [Travels, setTravels] = useState([])


  // api call
  const fetchTravels = async () => {
      const result = await axios.get('http://localhost:8000/getTravels')
      setTravels(result.data.message);
  }


  const deleteTravel=async (id)=>{
    const result=await axios.delete('http://localhost:8000/deleteTravels/'+id)
    alert(result.data.message)
    fetchTravels()
  }


  useEffect(() => {
      fetchTravels()
  }, [])
  return (





    <div>


<ButtonGroup size="lg" className="mb-2">
                       <Link to={'/add'}>
                            <Button>    <a href='' style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-solid fa-file-pen"></i>ADD NEW TRIP</a>
                            </Button>
                       </Link>
                    </ButtonGroup>



{
  Travels?.map(travel=>(

    <Card className='mt-5 ms-5' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={travel.photo} />
    <Card.Body>
        <Card.Title>{travel.Package}</Card.Title>
        <Card.Text>
           {travel.itinery}
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroup.Item>PRICE {travel.price} $ </ListGroup.Item>

        <ListGroup.Item>Package Provider  {travel.name}</ListGroup.Item>
    </ListGroup>
    <Card.Body>


        <ButtonGroup size="lg" className="mb-2 p-2 ms-2 mt-3">
          
         <Link to={`/edit/${travel.id}`}>
                <Button variant='warning'>   <a href='' style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-solid fa-file-pen"></i>EDIT</a>
                </Button>
         </Link>

           <p>
               <Link>
                  <Button  onClick={()=>deleteTravel(travel.id)} variant='danger'>   <a href='' style={{ textDecoration: 'none', color: 'black' }}> <i class="fa-solid fa-file-pen"></i>DELETE</a>
                  </Button>
  
               </Link>
           </p>

        </ButtonGroup>
    </Card.Body>
</Card>



  ))
}


        
      

    </div>
  )
}

export default House